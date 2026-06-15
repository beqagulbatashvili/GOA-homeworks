from django.http import HttpResponse

def laptops(request):
    return HttpResponse("""
    Asus VivoBook <br>
    MacBook Pro <br>
    HP Omen <br>
    Razer Blade
    """)

def vivobook(request):
    return HttpResponse("Asus VivoBook - Everyday use laptop")

def macbook(request):
    return HttpResponse("MacBook Pro - Professional laptop with Apple Silicon")

def omen(request):
    return HttpResponse("HP Omen - Gaming laptop")

def razer(request):
    return HttpResponse("Razer Blade - Premium gaming laptop")