def check_lowercase(user_str):
    if user_str.islower():
        print(user_str)
    else:
        print("სტრიქონი არ არის მთლიანად lowercase-ში.")

text = input("შეიყვანეთ წინადადება: ")
check_lowercase(text)
