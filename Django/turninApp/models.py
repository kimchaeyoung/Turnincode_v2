from django.db import models

class Student(models.Model):
    student_id = models.CharField(max_length=50)
    student_number = models.IntegerField(default=0)
    student_name = models.CharField(max_length=50)
 
    def __str__(self):
        return self.student_id

class Professor(models.Model):
    professor_id = models.CharField(max_length=50)
    professor_name = models.CharField(max_length=50)
    professor_status = models.BooleanField(default=False)
    
    def __str__(self):
        return self.professor_id

class Homework(models.Model):
    hw_name = models.CharField(max_length=200, null=True)
    hw_base = models.CharField(max_length=200)
    hw_eval = models.CharField(max_length=200)
    hw_description = models.CharField(max_length=500, null=True)
    hw_duedate = models.DateTimeField(blank=True, null=True)
    hw_madeby = models.CharField(max_length=50)

class Homework_Student(models.Model):
    hw = models.ForeignKey(Homework, related_name = "homework", on_delete=models.CASCADE)
    std = models.CharField(max_length=50)
    score = models.CharField(max_length=100)    
    commit_number = models.CharField(max_length=100)
    commit_message = models.CharField(max_length=100)
