from django.urls import path
from . import views

urlpatterns = [
    path("", views.laptops),
    path("vivobook/", views.vivobook),
    path("macbook/", views.macbook),
    path("omen/", views.omen),
    path("razer/", views.razer),
]