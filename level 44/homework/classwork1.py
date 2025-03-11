def digitize(n):  
    #გადავაქციოთ რიცხვი სტრინგად, რომ მისი ციფრები ინდივიდუალურად დავამუშაოთ
    str_n = str(n)  
    
    #შევაბრუნოთ სტრინგი, რომ მივიღოთ ციფრები შებრუნებული თანმიმდევრობით
    reversed_str_n = str_n[::-1]  
    
    #თითოეული სიმბოლო გარდავქმნათ მთელ რიცხვად (int)
    reversed_digits = map(int, reversed_str_n)  
    
    # ვაქციოთ map-ის შედეგი list-ად და დავაბრუნოთ
    return list(reversed_digits)

# ტესტირება
print(digitize(12345))
print(digitize(0))
print(digitize(987))