from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("alta/", include("alta.urls")),
    path("zoomer/", include("zoomer.urls")),
    path("ultra/", include("ultra.urls")),
    path("athome/", include("athome.urls")),
]