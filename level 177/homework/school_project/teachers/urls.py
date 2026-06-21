from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.all_teachers),
    path("delete/", views.delete_teacher),
    path("add/", views.add_teacher),
    path("edit/", views.edit_teacher),
]