from django.urls import path
from . import views

urlpatterns = [
    path("", views.laptops),
    path("huawei/", views.huawei),
    path("microsoft/", views.microsoft),
    path("lg/", views.lg),
    path("toshiba/", views.toshiba),
]