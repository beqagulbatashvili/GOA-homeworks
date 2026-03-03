# find
# 1)
sentence = "I am learning Python because Python is awesome."
position = sentence.find("Python")

print("The first occurrence of 'Python' is at position:", position)
# 2)
text = input("Enter the main string: ")
substring = input("Enter the substring to search for: ")

index = text.find(substring)

if index != -1:
    print("The substring '" + substring + "' starts at index", index)
else:
    print("The substring '" + substring + "' was not found in the given text.")
# 3)
def find_char_index(string, char):
    index = string.find(char)  
    print("The character '" + char + "' is at index:", index)

text = "Hello, World!"
character = "W"

find_char_index(text, character)