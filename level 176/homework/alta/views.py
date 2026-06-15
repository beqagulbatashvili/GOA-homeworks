from django.http import HttpResponse

def laptops(request):
    return HttpResponse("""
    HP <br>
    ROG <br>
    Samsung <br>
    Apple
    """)

def hp(request):
    return HttpResponse("HP Pavilion - Intel Core i5, 16GB RAM, 512GB SSD")

def rog(request):
    return HttpResponse("ASUS ROG Zephyrus - Gaming Laptop, RTX Graphics")  

def samsung(request):
    return HttpResponse("Samsung Galaxy Book - Lightweight laptop for productivity")  

def apple(request):
    return HttpResponse("MacBook Air M4 - 16GB RAM, up to 18 hours battery life") 