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
    profname = sys.argv[4]
    reponame = sys.argv[5]

    os.chdir("../Repos")
    os.chdir(stdname)
    os.chdir(reponame)
    cmd = 'git pull > /dev/null'

    os.system(cmd)

    os.system('git log --pretty="%h - %s - %cd" -1')

    os.chdir("../../../Django")

    host = socket.gethostname()
    port = 5000

    client_socket = socket.socket()
    client_socket.connect((host, port))

    cmd = stdname + ' ' + hwname + ' ' + profname + ' ' + reponame
    client_socket.send(cmd.encode())
    result = client_socket.recv(2014).decode()
    print(result)
#    if code != 'finish':
#        print("ERROR : wrong finish data")

    client_socket.close()  # close the connection


if __name__ == '__main__':
    client_program()
