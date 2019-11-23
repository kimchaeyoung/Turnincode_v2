from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import *
from .models import *
from .starts import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.core import serializers
from django.urls import reverse
import subprocess
import json
import os.path

def accept_collabo(sudotoken):

    command = 'curl -u forCSEE:' + sudotoken + ' https://api.github.com/user/repository_invitations'
    command = command.split()
    s = subprocess.check_output(command) 
    s = s.decode('utf-8')
    s = json.loads(s)

    for i in s:
      print(i['id'])
      print(i['repository']['html_url'])

      col_id = str(i['id'])
      col_name = i['repository']['full_name']
      col_repo = i['repository']['name']
      user_id = i['repository']['owner']['login']


      command = 'curl --request PATCH -i -u forCSEE:' + sudotoken + ' https://api.github.com/user/repository_invitations/' + col_id
      command = command.split()
      subprocess.check_output(command)
      
      command = 'git clone https://forCSEE:' + sudotoken + '@github.com/' + col_name +'.git'
      command = command.split()
      subprocess.check_call(command)
     
      f = open(col_repo+'/.turnincode', 'r')
      line = f.readline()
      line = line.rstrip('\n')
      print(line)     

      if Student.objects.filter(student_id=user_id).exists():
          print("student")
          if Homework.objects.filter(hw_base=line).exists():
              h = Homework.objects.get(hw_base=line)
              hs = Homework_Student(hw=h, std=user_id, repo_name=col_repo)
              hs.save()

          command = 'rm -rf ' + col_repo
          command = command.split()
          subprocess.check_output(command)

      elif Professor.objects.filter(professor_id=user_id).exists():
          eval_repo = i['repository']['html_url'] + '.git'
          hwname = line.split("/")[-1].split(".")[0]
          h = Homework(hw_name=hwname, hw_base=line, hw_eval=eval_repo, hw_madeby=user_id)
          h.save()
          print("professor")

          command = 'chmod 755 ' + col_repo + '/build.sh'
          os.system(command)
          command = 'chmod 755 ' + col_repo + '/run.sh'
          os.system(command)

          os.chdir("../Eval")
          if os.path.exists("./"+user_id) == False:
              os.system("mkdir " + user_id)
          os.chdir("../Django")

          command = 'mv ' + col_repo + ' ../Eval/' + user_id +'/' + hwname
          command = command.split()
          subprocess.check_output(command)

