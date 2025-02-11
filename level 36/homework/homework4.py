# isupper
# 1)
def check_all_uppercase(string):
    if string.isupper():
        print("All characters are uppercase.")
    else:
        print("Not all characters are uppercase.")

text = "HELLO WORLD"
check_all_uppercase(text)
# 2)
def is_all_uppercase(string):
    return string.isupper()

text = "HELLO WORLD"
result = is_all_uppercase(text)
print(result)
# 3)
def check_user_input_uppercase():
    user_input = input("Enter a string: ")
    if user_input.isupper():
        print("The string contains only uppercase letters.")
    else:
        print("The string contains lowercase letters too.")

check_user_input_uppercase()
