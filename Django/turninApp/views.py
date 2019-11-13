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

sudotoken = "c3f553db5622b249b2ebbdad7e9e18497c98e371"

def trg_acpt_col():
    accept_collabo(sudotoken)

def signin(request):
    trg_acpt_col()
    return render(request, 'signin.html')


def signup(request):
    return render(request, 'signup.html')

def success_login(request):
    current_user=request.user
    print(current_user)
    if current_user == "admin":
        return HttpResponse("you are logged in as admin. please check it")
    elif Student.objects.filter(student_id = current_user).exists():
        return redirect('student-page')
    elif Professor.objects.filter(professor_id = current_user).exists():
        return redirect('professor-page')
    else:
        print("not registered user")
        return redirect('signup')

def student_page(request):
    trg_acpt_col()
    return render(request, 'student_page.html')

def student_mypage(request):
    current_user = request.user
    if Homework_Student.objects.filter(std = current_user).exists():
        hs = Homework_Student.objects.filter(std=current_user)
        hwlist = []
        for h in hs:
            hinfo = [h.hw.id, h.hw.hw_name]
            hwlist.append(hinfo)
        hwlist = list(set(map(tuple, hwlist)))
        return JsonResponse(hwlist, safe=False)
    return HttpResponse()

def professor_page(request):
    trg_acpt_col()
    current_user = request.user
    p = Professor.objects.get(professor_id=current_user)
    if p.professor_status == True:
        return render(request, 'professor_page.html')
    else:
        return HttpResponse("You don't have any permission to access professor page. Please wait for authentication")

def current_user(request):
    current_user = request.user
    return JsonResponse(str(current_user), safe=False)

def runcode(request, hw_id):
    current_user = request.user
    h = Homework.objects.get(id=hw_id)
    hw_name = str(h.hw_name)
    std_name = str(current_user)

    cmd = "./docker/trigger " + std_name
    MyOut = subprocess.Popen(
            "./docker/trigger.py " + std_name + " " + hw_name + " " + sudotoken,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            shell=True)

    stdout, stderr = MyOut.communicate()
    current_score = None
    result = []
    if stdout is None:
        print("::ERROR::trigger did not pass result::")

    elif stdout is not None:
        stdout = stdout.decode('utf-8')

        print(stdout)

        stdout = stdout.split("\n")
        commit_history = stdout[0]
        print("hererererere " , commit_history)
        commit_history = commit_history.split("-")
        commit_number = commit_history[0].strip()
        commit_message = commit_history[1].strip()
        current_score = stdout[1]

#        if Homework_Student.objects.get(hw=h, std=std_name).score == '':
#            hs = Homework_Student.objects.get(hw=h, std=std_name)
#            hs.score = current_score
#            hs.commit_history = commit_history
#            hs.save()
#        else:
        hs = Homework_Student(hw=h, std=std_name, score=current_score, commit_number = commit_number, commit_message = commit_message)  
        hs.save()
        result = [current_score, commit_message, commit_number, hs.hw.hw_duedate]

    print("current score : " , current_score)
    return JsonResponse(result, safe=False)

def getscore(request, hw_name):
    hwlist = Homework_Student.objects.all()
    scorelist = []
    for i in hwlist:
        if i.hw.hw_name == hw_name:
            s = Student.objects.get(student_id=i.std)
            score = Homework_Student.objects.filter(std=i.std).last().score 
            slist = [s.student_number, s.student_name, s.student_id , score] 
            scorelist.append(slist)
        scorelist = list(set(map(tuple, scorelist)))   
    return JsonResponse(scorelist, safe=False)

def getscdetail(request, hw_name, std_id):
    hwlist = Homework_Student.objects.filter(std=std_id)
    stdinfo = Student.objects.get(student_id = std_id)
    scoredetail = [stdinfo.student_name, stdinfo.student_number, hwlist.last().score]
    slist = []
    for i in hwlist:
        if i.hw.hw_name == hw_name:
            slist.append([i.score, i.commit_message, i.commit_number])
    slist = list(reversed(slist))
    scoredetail.append(slist)
            
    return JsonResponse(scoredetail, safe=False)

'''
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
#    authentication_classes = (TokenAuthentication, )
#    permission_classes = (IsAuthenticated, )
'''
   
def student_getinfo(request, hw_id):
    h = Homework.objects.get(id=hw_id)
    hs = Homework_Student.objects.filter(hw=h, std=request.user)
    hslist = [h.hw_name, h.hw_base, h.hw_description, h.hw_duedate]
    hw = []
    datetime = ['2019-11-01 10:28:10', '2019-11-02 10:07:11', '2019-11-02 11:09:01', '2019-11-02 17:00:00', '2019-11-03 18:02:00']
    num = 0
    for i in hs:
        hw.append([i.score, i.commit_message, i.commit_number, datetime[num]])
        num += 1
    hw = list(reversed(hw)) 
    hslist.append(hw)    

    return JsonResponse(hslist, safe=False)

def updatehw(request):
    user = request.user
    h = Homework.objects.filter(hw_name= None, hw_madeby = user)
    if h.exists():
        hwlist = []
        for i in h:
            hw = [ i.id, i.hw_name, i.hw_base, i.hw_eval, i.hw_madeby ]
            hwlist.append(hw)
        return JsonResponse(hwlist, safe=False)
    return HttpResponse()
 
def gethw(request):
    user = request.user
    print(user)
    hs = Homework.objects.filter(hw_madeby=user)
    if hs.exists():
        hwlist = []
        for h in hs:
            hw = [ h.id, h.hw_name, h.hw_base, h.hw_eval, h.hw_description, h.hw_duedate ]
            hwlist.append(hw)
        return JsonResponse(hwlist, safe=False)
    else:
        print("not exist")
    return HttpResponse()

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class HomeworkViewSet(viewsets.ModelViewSet):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer

class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

@csrf_exempt
def webhook(request):
    result="before grading"
    if 'payload' in request.POST:
        payload = json.loads(request.POST['payload'])
        print(payload)
        result=payload
    return HttpResponse(result)


