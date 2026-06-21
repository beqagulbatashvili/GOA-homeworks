from django.http import HttpResponse

def audi_home(request):
    text = (
        "მოდელების სანახავად გადადით მისამართებზე:\n"
        "- /audi/rs6\n"
        "- /audi/r8"
    )
    return HttpResponse(text, content_type="text/plain; charset=utf-8")

def rs6_detail(request):
    text = "Audi RS6 დეტალები: მსოფლიოში ერთ-ერთი ყველაზე სწრაფი უნივერსალი. იდეალური საოჯახო მანქანა Quattro სრული ამძრაობით."
    return HttpResponse(text)

def r8_detail(request):
    text = "Audi R8 დეტალები: შუაძრავიანი სუპერქარი, რომელიც იზიარებს პლატფორმას Lamborghini Huracan-თან. აქვს V10 ატმოსფერული ძრავი."
    return HttpResponse(text)