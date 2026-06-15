from django.http import HttpResponse

def laptops(request):
    return HttpResponse("""
    Huawei <br>
    Microsoft <br>
    LG <br>
    Toshiba
    """)

def huawei(request):
    return HttpResponse("Huawei MateBook D16 - Productivity laptop")

def microsoft(request):
    return HttpResponse("Microsoft Surface Laptop - Touchscreen ultrabook")

def lg(request):
    return HttpResponse("LG Gram - Lightweight laptop")

def toshiba(request):
    return HttpResponse("Toshiba Dynabook - Business laptop")