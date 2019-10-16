from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.shortcuts import redirect
from django.http import HttpResponse


def signin(request):
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
    return render(request, 'student_page.html')

def professor_page(request):
    current_user = request.user
    p = Professor.objects.get(professor_id=current_user)
    if p.professor_status == True:
        return render(request, 'professor_page.html')
    else:
        return HttpResponse("You don't have any permission to access professor page. Please wait for authentication")


'''
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
#    authentication_classes = (TokenAuthentication, )
#    permission_classes = (IsAuthenticated, )
'''

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


