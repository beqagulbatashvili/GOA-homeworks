# islower
# 1)
def check_all_lowercase(string):
    if string.islower():
        print("All characters are lowercase.")
    else:
        print("Not all characters are lowercase.")

text = "hello world"
check_all_lowercase(text)
# 2)
def is_all_lowercase(string):
    return string.islower()

text = "hello world"
result = is_all_lowercase(text)
print(result)
# 3)
def check_user_input_lowercase():
    user_input = input("Enter a string: ")
    if user_input.islower():
        print("The string contains only lowercase letters.")
    else:
        print("The string contains uppercase letters too.")

check_user_input_lowercase()
