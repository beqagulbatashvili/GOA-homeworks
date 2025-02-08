# capitalize
# 1)
word = input("შეიყვანეთ სიტყვა: ")
capitalized_word = word.capitalize()
print("Capitalize ფორმატით: ", capitalized_word)
# 2)
def capitalize_string(string):
    string = string.capitalize()  
    print(string)

my_string = "hello world"
capitalize_string(my_string)  