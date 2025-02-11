def manual_isdigit(user_str):
    is_digit = True 
    
    for i in user_str:
        if not ('0' <= i <= '9'): 
            is_digit = False  
    print(is_digit) 

text = input("შეიყვანეთ ტექსტი: ")
manual_isdigit(text)
