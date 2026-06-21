from django.urls import path
from . import views

urlpatterns = [
    path('', views.bmw_home, name='bmw_home'),
    path('e39', views.e39_detail, name='e39_detail'),
    path('m3', views.m3_detail, name='m3_detail'),
    path('m8', views.m8_detail, name='m8_detail'),
]