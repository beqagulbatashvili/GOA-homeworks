def iscapitalized(user_str):
    if user_str[0].isupper() and user_str[1:].islower():
        print(True)
    else:
        print(False)

text = input("შეიყვანეთ წინადადება: ")
iscapitalized(text)
