from django.http import HttpResponse

def mercedes_home(request):
    text = (
        "მოდელების სანახავად გადადით მისამართებზე:\n"
        "- /mercedes/e63\n"
        "- /mercedes/g63"
    )
    return HttpResponse(text)

def e63_detail(request):
    text = "Mercedes E63 AMG დეტალები: ბიზნეს კლასის სედანი სუპერქარის მონაცემებით. გამოირჩევა კომფორტითა და აგრესიული ხმით."
    return HttpResponse(text)

def g63_detail(request):
    text = "Mercedes G63 AMG დეტალები: ლეგენდარული 'გელენდვაგენი'. ყველგანმავალი, რომელიც აერთიანებს წარმოუდგენელ გამავლობასა და ფუფუნებას."
    return HttpResponse(text)