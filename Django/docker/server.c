#include <unistd.h> 
#include <stdio.h> 
#include <sys/socket.h> 
#include <stdlib.h> 
#include <netinet/in.h> 
#include <string.h> 
#include <unistd.h>  

void
recv_message(int conn, char * buf)
{
    int s, len ;
//    char buf[1024] ;
    char * data = 0x0 ;
    len = 0 ;
    
    while ( (s = recv(conn, buf, 1023, 0)) > 0 ) {
        buf[s] = 0x0 ;
        if (data == 0x0) {
            data = strdup(buf) ;
            len = s ;
        }
        else {
            data = realloc(data, len + s + 1) ;
            strncpy(data + len, buf, s) ;
            data[len + s] = 0x0 ;
            len += s ;
        }
        
    }
//    printf(">%s\n", data);
}

void
send_message(int conn, char * buffer)
{
    char * data;
    data = (char *)malloc(sizeof(char)*(strlen(buffer)+1)) ;
    strcpy(data, buffer);
    int len ;
    len = strlen(data) ;
    int s = 0 ;
    while (len > 0 && (s = send(conn, data, len, 0)) > 0) {
        data += s ;
        len -= s ;
    }
}

void Rjwu(){
	system("docker stop client");
}


int 
main(int argc, char const *argv[]) 
{
	char s[100]; 
	printf("%s\n", getcwd(s, 100));
	char repo_name[100] ;
	char hwname[100];
	char stdname[100];

	if(argc!=4){
		printf("usage: ./server <repo_name> <hwname> <stdname>\n");
		return 0;
	}
	strcpy(repo_name, argv[1]) ;
 	strcpy(hwname, argv[2]);
	strcpy(stdname, argv[3]);

	int listen_fd, new_socket ; 
	struct sockaddr_in address; 
	int opt = 1; 
	int addrlen = sizeof(address); 

	char buffer[1024] = {0}; 

	listen_fd = socket(AF_INET /*IPv4*/, SOCK_STREAM /*TCP*/, 0 /*IP*/) ;
	if (listen_fd == 0)  { 
		perror("socket failed : "); 
		exit(EXIT_FAILURE); 
	}
	
	memset(&address, '0', sizeof(address)); 
	address.sin_family = AF_INET; 
	address.sin_addr.s_addr = INADDR_ANY /* the localhost*/ ; 
	address.sin_port = htons(8888); 
	if (bind(listen_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
		perror("bind failed : "); 
		exit(EXIT_FAILURE); 
	}

	

	while (1) {
		if (listen(listen_fd, 16 /* the size of waiting queue*/) < 0) { 
			perror("listen failed : "); 
			exit(EXIT_FAILURE); 
		} 


		new_socket = accept(listen_fd, (struct sockaddr *) &address, (socklen_t*)&addrlen) ;
		if (new_socket < 0) {
			perror("accept"); 
			exit(EXIT_FAILURE); 
		}


		char msg[32];
		recv_message(new_socket, msg) ;
		printf("!!! msg: %d\n", atoi(msg));

                if(atoi(msg) == 2) {
			char cmd[2048] = "docker cp ../Repos/" ;
			strcat(cmd, repo_name) ;
			strcat(cmd, "/main.c client:.") ;
			system(cmd) ;
			printf("respository passed to docker client\n") ;
			send_message(new_socket, "3");
		}

		if(atoi(msg) == 4) {
			char cmd[2048] = "docker cp ../InputOutputs/";
			strcat(cmd, hwname);
			strcat(cmd, "/input.txt client:.");
			printf("cmd: %s\n", cmd);
			system(cmd);
			printf("inputfile passed to docker client\n") ;
			send_message(new_socket, "5") ;
		}

		if(atoi(msg) == 6) {
			char cmd[2048] = "docker cp client:./studentoutput.txt ../InputOutputs/";
			strcat(cmd, hwname);
			strcat(cmd, "/");
			strcat(cmd, stdname);
			strcat(cmd, ".txt");
			system(cmd);
			printf("get student's output file\n") ;
			send_message(new_socket, "7") ;
                        //evaluate
                        FILE* fp1;
                        FILE* fp2;
                        int check = 1;
                        int state1, state2;
			int buff = 100 ;
                        char a[buff], b[buff];

			char fp1path[2048] = "../InputOutputs/";
			strcat(fp1path, hwname);
			strcat(fp1path, "/output.txt");
			printf("fp1: %s\n", fp1path);

			char fp2path[2048] = "../InputOutputs/";
			strcat(fp2path, hwname);
			strcat(fp2path, "/");
			strcat(fp2path,stdname);
			strcat(fp2path, ".txt");
			printf("fp2: %s\n", fp2path);

                        fp1 = fopen(fp1path, "rt");
                        fp2 = fopen(fp2path, "rt");

			if(fp2 == NULL){
				printf("fp2 error when fopen files");
				Rjwu();
				return 1;
			}

                        if (fp1 == NULL) {
                                printf("fp1 error when fopen files");
				Rjwu();
				return 1;
                        }


                        while(1){
                                if (feof(fp1) == 0 && feof(fp2) == 0) {
                                        fgets(a, buff, fp1);
                                        fgets(b, buff, fp2);

                                        if(strcmp(a,b)!=0){
                                                check = 0;
                                                break;
                                        }
                                }

                                else if(feof(fp1)!=0 && feof(fp2)==0){
                                        check = 0;
                                        break;
                                }

                                else if(feof(fp1)==0 && feof(fp2)!=0){
                                        check = 0;
                                        break;
                                }

                                else break;


                        }

                        if(check){
                                printf("correct\n");
                        }
                        else printf("wrong\n");


			Rjwu();// Exit docker && exit server
			return 1;
		}


		//ERROR EXCEPTION
		if(atoi(msg) == 13) {
			printf("docker exit");
			Rjwu();
		}

		if(atoi(msg) == 14){
			printf("build error");

			char filepath[2048] = "../InputOutputs/";
			strcat(filepath, hwname);
                        strcat(filepath, "/");
                        strcat(filepath, stdname);
                        strcat(filepath, "-error.txt");

			char cmd[2048] = "docker cp client:./error.txt ";
                        strcat(cmd, filepath);
                        system(cmd);
		
			FILE* fp = fopen(filepath, "r");

			if(fp==NULL){
				printf("fp error when fopen file\n");
			}

			char ch;
			while(1){
				ch = fgetc(fp);
				if(ch==EOF) break;
				fprintf(stderr, "%c", ch);
			}


			Rjwu();
			return 0;
		}

		shutdown(new_socket, SHUT_WR) ;
	}




}
