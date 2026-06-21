from django.http import HttpResponse

def bmw_home(request):
    text = (

        "მოდელების სანახავად გადადით მისამართებზე:\n"
        "- /bmw/e39\n"
        "- /bmw/m3\n"
        "- /bmw/m8"
    )
    return HttpResponse(text, content_type="text/plain; charset=utf-8")

def e39_detail(request):
    text = "BMW E39 დეტალები: ლეგენდარული მე-5 სერიის მოდელი (1995-2004). განსაკუთრებით პოპულარულია M5 ვერსია V8 ძრავით."
    return HttpResponse(text)

def m3_detail(request):
    text = "BMW M3 დეტალები: სპორტული კომპაქტური მანქანა. ცნობილია თავისი მართვადობით და სიმძლავრით როგორც ტრეკზე, ისე ქალაქში."
    return HttpResponse(text)

def m8_detail(request):
    text = "BMW M8 დეტალები: BMW-ს ფლაგმანი კუპე, აღჭურვილია 4.4-ლიტრიანი Twin-Turbo V8 ძრავით."
    return HttpResponse(text)