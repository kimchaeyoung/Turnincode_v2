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

#finish this turn
def code_close():
    if os.path.exists("new") == True:
        os.system("rm -rf new")
    
def server_program():
    host = socket.gethostname()
    port = 4000

    server_socket = socket.socket()
    server_socket.bind((host, port))

    server_socket.listen(2)
    conn, address = server_socket.accept()
    print("Connection from: " + str(address))
    code = 'start'
    while True:
        code = conn.recv(1024).decode()
        if not code:
            print(":::end connection:::")
            code_close()
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
