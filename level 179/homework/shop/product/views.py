from django.http import HttpResponse

product_database = [
    {
        "id": 0,
        "title": "apple",
        "price": 5,
    },
    {
        "id": 1,
        "title": "banana",
        "price": 7,
    },
    {
        "id": 2,
        "title": "orange",
        "price": 6,
    },
    {
        "id": 3,
        "title": "kiwi",
        "price": 10,
    },
]


def products(request):
    text = ""

    for product in product_database:
        text += "<a href='/product/" + product["title"] + "/'>" + product["title"] + "</a><br>"

    return HttpResponse(text)


def product_detail(request, title):
    for product in product_database:
        if product["title"] == title:
            return HttpResponse(
                "ID: " + str(product["id"]) +
                "<br>Title: " + product["title"] +
                "<br>Price: " + str(product["price"])
            )

    return HttpResponse("Product not found")