#!/usr/bin/env python3
import socket
import os

#docker

#for check start_mode
def code_red():
    print("red")


def code_yellow():
    os.chdir("../new") 
    os.system("gcc main.c 2> error.txt")
    os.chdir("../")
    print("yellow")
    with open('new/error.txt') as error_file:
        empty = error_file.read(1)
        if not empty:
            return "green"
        else:
            return "lightGreen"

def code_blue():
    os.system("cat new/input.txt|./new/a.out>new/studentoutput.txt")
    print("blue")

def code_white():
    print("white")

#exit_code
def code_balck():
    cmd = "rm -rf new"
    os.system(cmd)
    
def server_program():
    host = socket.gethostname()
#    host = '222.239.251.48'
    port = 4000  # initiate port no above 1024

    server_socket = socket.socket()  # get instance
    server_socket.bind((host, port))  # bind host address and port together
#    server_socket.bind(('',port))

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
            next_code = code_yellow()
            conn.send(next_code.encode())

        elif code.strip() == 'blue':
            code_blue()
            conn.send('purple'.encode())

        elif code.strip() == 'white':
            code_white()
            code = 'white'

    conn.close()  # close the connection


if __name__ == '__main__':
    server_program()
