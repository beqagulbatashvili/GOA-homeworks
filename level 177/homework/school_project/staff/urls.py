from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.all_staff),
    path("delete/", views.delete_staff),
    path("add/", views.add_staff),
    path("update/", views.update_staff),
    path("dashboard/", views.staff_dashboard),
]