from django.urls import path
from .views import users_list, add_user, delete_user, edit_user

urlpatterns = [
    path("", users_list, name="users"),
    path("add/", add_user, name="add_user"),
    path("delete/", delete_user, name="delete_user"),
    path("edit/", edit_user, name="edit_user"),
]