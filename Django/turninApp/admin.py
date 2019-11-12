from django.contrib import admin
from .models import *

admin.site.register(Student)
admin.site.register(Professor)
admin.site.register(Homework)
admin.site.register(Homework_Student)
