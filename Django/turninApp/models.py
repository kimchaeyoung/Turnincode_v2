from django.db import models

class Student(models.Model):
    student_id = models.CharField(max_length=50)
    student_number = models.IntegerField(default=0)
    student_name = models.CharField(max_length=50)
    student_password = models.CharField(max_length=50)
    
    def __str__(self):
        return self.student_name

class Homework(models.Model):
    hw_name = models.CharField(max_length=200)
    hw_link = models.CharField(max_length=200)
    hw_description = models.CharField(max_length=500)
#    duedate = models.DateTimeField(blank=True, null=True)
