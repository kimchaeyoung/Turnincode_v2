import subprocess
import os
import threading
import time
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.core import serializers

def home(request):
    return render(request, 'home.html')

def student(request):
    return render(request, 'student.html')

def csee(request):
    return render(request, 'csee.html')

def fordocker():
    time.sleep(5);
    os.system('./docker/rundocker.sh')

def search(request, homework):
#    current_user = request.user
#    print(current_user)
#    if Student.objects.filter(student_id=current_user).exists():
    hw = Homework.objects.get(hw_name=homework)
    print(hw.hw_name)
#    res = serializers.serialize('json',hw)
    return HttpResponse(hw.hw_name, content_type="text/json-comment-filtered")
    

def run_code(request):
    repository_name = "hw1-MJ"    
    reponame = repository_name.split("-")
    hwname = reponame[0]
    stdname = reponame[1]

    current_user = request.user

    MyOut = subprocess.Popen('./docker/server ' + repository_name +' ' +hwname+' '+stdname, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

    t = threading.Thread(target=fordocker)
    t.start()

    stdout, stderr = MyOut.communicate()

    if stdout is not None:
        stdout = stdout.decode('utf-8')
        print(stdout)
        if stdout == "correct":
            #db save
            print("correct!\n")
        elif stdout == "wrong":
            #db save
            print("wrong")


    if stderr != '':
        stderr = stderr.decode('utf-8')
        print(stderr)
 

    #docker 붙이는 자리 
    print("test good")
    return HttpResponse()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
#    authentication_classes = (TokenAuthentication, )
#    permission_classes = (IsAuthenticated, )

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class HomeworkViewSet(viewsets.ModelViewSet):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer

def github_login(request):
    return render(request, 'github_login.html')
