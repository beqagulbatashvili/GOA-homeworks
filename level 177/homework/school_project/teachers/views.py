from django.http import HttpResponse

def all_teachers(request):
    return HttpResponse("All Teachers")

def delete_teacher(request):
    return HttpResponse("Delete Teacher")

def add_teacher(request):
    return HttpResponse("Add Teacher")

def edit_teacher(request):
    return HttpResponse("Edit Teacher")