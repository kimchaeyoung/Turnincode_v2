from django.urls import include, path
from django.conf.urls import url, include
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

router2 = routers.DefaultRouter()
router2.register(r'students', views.StudentViewSet)

router3 = routers.DefaultRouter()
router3.register(r'homeworks', views.HomeworkViewSet)

urlpatterns = [
    path('r', include(router.urls)),
    path('s', include(router2.urls)),
    path('h', include(router3.urls)),
    path('', views.student, name='student'),
    path('csee/', views.csee, name='csee'),
    path('result/', views.run_code, name='result'),
    path('auth/', ObtainAuthToken.as_view()),
    path('github/', views.github_login),
    url(r'^auth/', include('social_django.urls', namespace='social')),
]
