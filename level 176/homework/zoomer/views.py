from django.http import HttpResponse

def laptops(request):
    return HttpResponse("""
    Lenovo <br>
    Acer <br>
    MSI <br>
    Dell
    """)

def lenovo(request):
    return HttpResponse("Lenovo Legion - Gaming laptop with powerful performance")

def acer(request):
    return HttpResponse("Acer Aspire 5 - Budget friendly laptop")

def msi(request):
    return HttpResponse("MSI Katana - Gaming laptop with RTX graphics")

def dell(request):
    return HttpResponse("Dell XPS 13 - Premium ultrabook")