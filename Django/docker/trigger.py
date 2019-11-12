#!/usr/bin/env python3
import socket
import sys
import os
import subprocess
import time
#trigger

def client_program():
    stdname = sys.argv[1]
    hwname = sys.argv[2]
    sudotoken = sys.argv[3]

    os.chdir("../Repos")
    if os.path.exists("./" + stdname) == False:
        os.system("mkdir " + stdname)
    os.chdir(stdname)

    cmd = 'git clone https://forCSEE:' + sudotoken + '@github.com/' + stdname + '/' + hwname +'.git'
    os.system(cmd)

    os.chdir(hwname)
#    os.system("git log --pretty=oneline -1")
    os.system('git log --pretty="%h - %s" -1')

    os.chdir("../../../Django")

    host = socket.gethostname()
    port = 5000

    client_socket = socket.socket()
    client_socket.connect((host, port))

    cmd = stdname + ' ' + hwname
    client_socket.send(cmd.encode())
    result = client_socket.recv(2014).decode()
    print(result)
#    if code != 'finish':
#        print("ERROR : wrong finish data")

    client_socket.close()  # close the connection


if __name__ == '__main__':
    client_program()
