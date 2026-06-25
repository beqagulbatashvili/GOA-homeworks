from django.shortcuts import render

def home(request):
    context = {
        'arr': [
            {
                'name': 'aleksandre',
                'surname': 'dzukaevi',
                'age': 15
            },
            {
                'name': 'davit',
                'surname': 'shavidze',
                'age': 17
            },
            {
                'name': 'nika',
                'surname': 'beridze',
                'age': 18
            },
            {
                'name': 'giorgi',
                'surname': 'kapanadze',
                'age': 20
            }
        ]
    }

    return render(request, 'index.html', context)