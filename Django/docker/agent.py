#!/usr/bin/env python3
import socket
import os
import filecmp
import sys
import time
#agent

def eval():
    with open('../../Eval/studentoutput.txt', 'r') as content_file1:
        global content1
        content1 = content_file1.read().strip()
        print(content1)
    with open('../../Eval/' + hwname + '/output.txt', 'r') as content_file2:
        global content2
        content2 = content_file2.read().strip()
        print(content2)
    global result
    if content1 == content2:
        result = "pass"
    else:
        result = "fail"
    print(result)
#    f1 = '../../Eval/studentoutput.txt'
#    f2 = '../../Eval/' + hwname + '/output.txt'
#    global result
#    if filecmp.cmp(f1, f2, shallow=False):
#        result = "pass"
#    else:
#         result = "fail"
    print(result)

def code_orange():
    cmd = "docker cp ../../Repos/" + stdname + "/" + hwname + "/main.c docker:new/."
    os.system(cmd)

    print('orange')

def code_green():
    cmd = "docker cp ../../Eval/" + hwname + "/input.txt docker:new/."
    os.system(cmd)
    print('green')

#build_error
def code_lightGreen():
    cmd = "docker cp docker:new/error.txt ../../Eval/studenterror.txt"
    os.system(cmd)
    with open("../../Eval/studenterror.txt", 'r') as error_file:
        error = error_file.read()
        result = error
    print('lightGreen')

def code_purple():
    cmd = "docker cp docker:new/studentoutput.txt ../../Eval/studentoutput.txt"
    os.system(cmd)
    eval()
    print('purple')

def code_white():
    print('white')

def code_black():
    cmd = "rm -f ../../Eval/studentoutput.txt"
#    os.system(cmd)
    cmd = "rm -f ../../Eval/studenterror.txt"
    os.system(cmd)
    cmd = "rm -rf ../../Repos/" + stdname
    os.system(cmd)
    print('black')

def server_program():
    doc_host = socket.gethostname()
    doc_port = 4000  # initiate port no above 1024

    tri_host = socket.gethostname()
    tri_port = 5000

    tri_socket = socket.socket()
    tri_socket.bind((tri_host, tri_port))

    tri_socket.listen(2)
    tri_conn, address = tri_socket.accept()  # accept new connection
    print("Connection from: " + str(address))

    while True:
        code = tri_conn.recv(1024).decode()
        if not code:
            print("agent ERROR: no data")
            tri_conn.close()
            tri_socket.listen(2)
            tri_conn, address = tri_socket.accept()
            continue
        else:
            stdhwname = code
            print(stdhwname)
            stdhwnamesplit = stdhwname.split()
            global stdname
            global hwname
            stdname = stdhwnamesplit[0]
            hwname = stdhwnamesplit[1]

            code = 'red'
            while code.lower().strip() != 'bye':
                if code == 'red':
                    doc_socket = socket.socket()
                    doc_socket.connect((doc_host, doc_port))
                doc_socket.send(code.encode())
                code = doc_socket.recv(1024).decode()

                if code.strip() == 'orange':
                    code_orange()
                    code = 'yellow'

                elif code.strip() == 'lightGreen':
                    code_lightGreen()
                    code_black()

                elif code.strip() == 'green':
                    code_green()
                    code = 'blue'

                elif code.strip() == 'purple':
                    code_purple()
                    code_black()
                    code = 'bye'

            doc_socket.close()
            tri_conn.send(result.encode())

    tri_conn.close()


if __name__ == '__main__':
    server_program()


