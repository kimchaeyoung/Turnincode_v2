#!/usr/bin/env python3
import socket

#docker

def code_red():
    print("red")

def code_yellow():
    print("yellow")

def code_blue():
    print("blue")

def code_white():
    print("white")

def server_program():
    host = socket.gethostname()
    port = 4000  # initiate port no above 1024

    server_socket = socket.socket()  # get instance
    server_socket.bind((host, port))  # bind host address and port together

    server_socket.listen(2)
    conn, address = server_socket.accept()  # accept new connection
    print("Connection from: " + str(address))
    code = 'start'
    while True:
        code = conn.recv(1024).decode()
        if not code:
            print("no data")
            conn.close()
            server_socket.listen(2)
            conn, address = server_socket.accept()
            continue


        if code.strip() == 'red':
            code_red()
            conn.send('orange'.encode())

        elif code.strip() == 'yellow':
            code_yellow()
            conn.send('green'.encode())

        elif code.strip() == 'blue':
            code_blue()
            conn.send('purple'.encode())

        elif code.strip() == 'white':
            code_white()
            code = 'white'

    conn.close()  # close the connection


if __name__ == '__main__':
    server_program()
