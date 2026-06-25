from django.shortcuts import render

def home(request):
    context = {
        "prices": [50, 120, 80, 200, 99],
        "numbers": [5, 7, 10, 13, 15],
        "words": ["hello", "python", "goa", "django"],
        "ages": [10, 13, 17, 8, 20],
        "scores": [95, 70, 90, 85, 100]
    }

    return render(request, "index.html", context)