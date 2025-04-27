squares = [x ** 2 for x in range(1, 11)]
print(squares)


numbers = list(range(1, 21))
even_numbers = [x for x in numbers if x % 2 == 0]
print(even_numbers)


words = ["apple", "banana", "cherry", "date"]
uppercase_words = [word.upper() for word in words]
print(uppercase_words)


words = ["apple", "banana", "cherry", "date"]
word_lengths = [len(word) for word in words]
print(word_lengths)


numbers = [1, 2, 3, 4, 5]
added_five = [x + 5 for x in numbers]
print(added_five)


strings = ["apple", "banana", "cherry", "date"]
first_letters = [word[0] for word in strings]
print(first_letters)


numbers = [1, 2, 3, 4, 5]
doubled_numbers = [x * 2 for x in numbers]
print(doubled_numbers)
