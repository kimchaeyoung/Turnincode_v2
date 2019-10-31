from django.urls import include, path
from django.conf.urls import url, include
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import views as auth_views

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
    path('gethw/',views.gethw, name='gethw'),
    path('', views.signin, name='signin'),
    path('signup', views.signup, name='signup'),
    path('success-login/', views.success_login, name='success-login'),
    path('student-page/', views.student_page, name='student-page'),
    path('student-mypage/', views.student_mypage, name='student-mypage'),
    path('professor-page/', views.professor_page, name='professor-page'),
    url(r'^professor-page/getregister/(?P<hw_id>[^/]+)/$', views.updatehw, name='updatehw'),
    url(r'^student-page/getinfo/(?P<hw_id>[^/]+)/$', views.student_getinfo, name='student_getinfo'),
    url(r'^professor-page/getscoreboard/(?P<hw_name>[^/]+)/$', views.getscore),
    url(r'^professor-page/getscorestd/(?P<hw_name>[^/]+)/(?P<std_id>[^/]+)/$', views.getscdetail),
    path('auth/', ObtainAuthToken.as_view()),
    url(r'^auth/', include('social_django.urls', namespace='social')),
    path('accounts/', include('django.contrib.auth.urls')),  
    url(r'^accounts/logout/', auth_views.LogoutView, name='logout'),
    path('current_user/', views.current_user, name='current_user'),
    url(r'^result/(?P<hw_id>[^/]+)/$', views.runcode, name='result'),
]

