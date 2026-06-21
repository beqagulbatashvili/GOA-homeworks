from django.urls import path
from . import views

urlpatterns = [
    path('', views.mercedes_home, name='mercedes_home'),
    path('e63', views.e63_detail, name='e63_detail'),
    path('g63', views.g63_detail, name='g63_detail'),
]