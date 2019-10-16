from django.urls import include, path
from django.conf.urls import url, include
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import ObtainAuthToken

'''
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
'''

router2 = routers.DefaultRouter()
router2.register(r'students', views.StudentViewSet)

router3 = routers.DefaultRouter()
router3.register(r'professors', views.ProfessorViewSet)

router4 = routers.DefaultRouter()
router4.register(r'homeworks', views.HomeworkViewSet)

urlpatterns = [
    path('webhook', views.webhook, name='webhook'),
    path('s', include(router2.urls)),
    path('p', include(router3.urls)),
    path('h', include(router4.urls)),
    path('', views.signin, name='signin'),
    path('signup', views.signup, name='signup'),
    path('success-login/', views.success_login, name='success-login'),
    path('student-page/', views.student_page, name='student-page'),
    path('professor-page/', views.professor_page, name='professor-page'),
    path('auth/', ObtainAuthToken.as_view()),
    url(r'^auth/', include('social_django.urls', namespace='social')),
]