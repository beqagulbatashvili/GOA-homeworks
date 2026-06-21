from django.shortcuts import render
from django.http import HttpResponse

def users_list(request):
    return render(request, "users/users.html")

def add_user(request):
    return HttpResponse("User Added")

def delete_user(request):
    return HttpResponse("User Deleted")

def edit_user(request):
    return HttpResponse("User Edited")