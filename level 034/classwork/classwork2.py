def manual_capitalize(user_str):
    user_str = user_str.lower()
    
    first_letter = user_str[0].upper()
    
    capitalized_str = first_letter + user_str[1:]
    
    print("კაპიტალიზებული სტრინგი:", capitalized_str)

user_input = input("შეიყვანეთ სტრინგი: ")

manual_capitalize(user_input)
