from django.http import HttpResponse

def all_staff(request):
    return HttpResponse("All Staff")

def delete_staff(request):
    return HttpResponse("Delete Staff")

def add_staff(request):
    return HttpResponse("Add Staff")

def update_staff(request):
    return HttpResponse("Update Staff")

def staff_dashboard(request):
    return HttpResponse("Staff Dashboard")