from django.urls import path
from . import views

urlpatterns = [
    path('', views.audi_home, name='audi_home'),
    path('rs6', views.rs6_detail, name='rs6_detail'),
    path('r8', views.r8_detail, name='r8_detail'),
]