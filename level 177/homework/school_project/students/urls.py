from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.all_students),
    path("delete/", views.delete_student),
    path("add/", views.add_student),
    path("edit/", views.edit_student),
]