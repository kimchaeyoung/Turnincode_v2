#!/usr/bin/env python3
import socket

#trigger

def client_program():
    host = socket.gethostname()  # as both code is running on same pc
    port = 5000  # socket server port number

    client_socket = socket.socket()  # instantiate
    client_socket.connect((host, port))  # connect to the server

    client_socket.send('start'.encode())
    code = client_socket.recv(2014).decode()
    if code != 'finish':
        print("ERROR : wrong finish data")

    client_socket.close()  # close the connection


if __name__ == '__main__':
    client_program()
