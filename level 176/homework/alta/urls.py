from django.urls import path
from . import views

urlpatterns = [
    path("", views.laptops),
    path("hp/", views.hp),
    path("rog/", views.rog),
    path("samsung/", views.samsung),
    path("apple/", views.apple),
]