from django.urls import path
from . import views

urlpatterns = [
    path("", views.products),
    path("<str:title>/", views.product_detail),
]