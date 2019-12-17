from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
'''
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only':True, 'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
'''

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ('student_id', 'student_name', 'student_number')
#        extra_kwargs = {'student_password': {'write_only':True, 'required':True}}

    def create(self, validated_data):
        student = Student.objects.create(**validated_data)
        return student

class ProfessorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Professor
        fields = ('professor_id', 'professor_name')

    def create(self, validated_data):
        professor = Professor.objects.create(**validated_data)
        return professor


class HomeworkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Homework
        fields = ('hw_name', 'hw_base', 'hw_eval', 'hw_duedate', 'hw_madeby')

    def create(self, validated_data):
        homework = Homework.objects.create(**validated_data)
        return homework
