#!/usr/bin/env python3
import socket

#agent

def code_orange():
    print('orange')

def code_green():
    print('green')

def code_purple():
    print('purple')

def code_white():
    print('white')

def server_program():
    doc_host = socket.gethostname()
    doc_port = 4000  # initiate port no above 1024

#    doc_socket = socket.socket()  # get instance
#    doc_socket.connect((doc_host, doc_port))  # bind host address and port together

    tri_host = socket.gethostname()
    tri_port = 5000

    tri_socket = socket.socket()
    tri_socket.bind((tri_host, tri_port))

    tri_socket.listen(2)
    tri_conn, address = tri_socket.accept()  # accept new connection
    print("Connection from: " + str(address))

    while True:
        code = tri_conn.recv(1024).decode()
        if not code or code.strip() != 'start':
            print("agent ERROR: recive wrong strat code")
            tri_conn.close()
            tri_socket.listen(2)
            tri_conn, address = tri_socket.accept()
            continue

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

            elif code.strip() == 'green':
                code_green()
                code = 'blue'

            elif code.strip() == 'purple':
                code_purple()
                code = 'bye'

        doc_socket.close()
        tri_conn.send('finish'.encode())

    tri_conn.close()  # close the connection


if __name__ == '__main__':
    server_program()
