# index
# 1)
def find_hello_index(string):
    index = string.find("hello")
    print("The word 'hello' starts at index:", index)

text = "Hey there! hello world, hello again!"
find_hello_index(text)
# 2)
def find_user_char_index(string):
    char = input("Enter a character to find its index: ")
    index = string.find(char)
    print("The character '" + char + "' is at index:", index)

text = "Python programming is fun!"
find_user_char_index(text)
