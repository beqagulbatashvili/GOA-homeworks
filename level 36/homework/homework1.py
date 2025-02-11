# count
# 1)
def count_the_occurrences(paragraph):
    words = paragraph.lower().split() 
    count = words.count("the")
    print("The word 'the' appears", count, "times.")

text = "The sun is shining. The sky is blue. The birds are singing."
count_the_occurrences(text)
# 2)
def count_char_occurrences(string):
    char = input("Enter a character to count: ")
    count = string.count(char)
    print("The character '" + char + "' appears", count, "times.")

text = "Hello, how are you doing today?"
count_char_occurrences(text)
# 3)
def count_word_occurrences(text, word):
    words = text.lower().split()
    count = words.count(word.lower())
    print("The word '" + word + "' appears", count, "times.")

paragraph = "Python is great. I love Python because Python is powerful."
word_to_count = "Python"
count_word_occurrences(paragraph, word_to_count)
