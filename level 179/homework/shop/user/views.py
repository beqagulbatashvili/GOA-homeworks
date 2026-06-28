from django.http import HttpResponse

user_database = [
    {
        "id": 0,
        "username": "aleksandre",
        "email": "aleksandre@gmail.com",
    },
    {
        "id": 1,
        "username": "nika",
        "email": "nika@gmail.com",
    },
    {
        "id": 2,
        "username": "gio",
        "email": "gio@gmail.com",
    },
    {
        "id": 3,
        "username": "luka",
        "email": "luka@gmail.com",
    },
]


def users(request):
    text = ""

    for user in user_database:
        text += "<a href='/user/" + str(user["id"]) + "/'>" + user["username"] + "</a><br>"

    return HttpResponse(text)


def user_detail(request, id):
    for user in user_database:
        if user["id"] == id:
            return HttpResponse(
                "ID: " + str(user["id"]) +
                "<br>Username: " + user["username"] +
                "<br>Email: " + user["email"]
            )

    return HttpResponse("User not found")