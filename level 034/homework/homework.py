# upper
# 1)
sentence = "This is a sample text"
uppercase_sentence = sentence.upper()
print(uppercase_sentence)

# 2)
name = input("Enter your name: ")
uppercase_name = name.upper()
print("Your name in uppercase:", uppercase_name)

# 3)
def print_uppercase(strings_list):
    for string in strings_list:
        print(string.upper())

my_list = ["Hello", "How are you?", "Stay well"]
print_uppercase(my_list)
