words = ["apple", "banana", "cherry"]
uppercase_words = list(map(str.upper, words))
print(uppercase_words) 


numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers) 


numbers = [10, 20, 30]
added_five = list(map(lambda x: x + 5, numbers))
print(added_five)


celsius = [0, 20, 37, 100]
fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))
print(fahrenheit) 


words = ["hello", "world", "python"]
first_chars = list(map(lambda word: word[0], words))
print(first_chars) 


numbers = [1, 2, 3, 4, 5, 6, 7, 8]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_numbers)


words = ["apple", "banana", "cherry", "fig", "grapefruit"]
long_words = list(filter(lambda w: len(w) > 5, words))
print(long_words)  


numbers = [-10, -5, 0, 3, 7]
non_negative = list(filter(lambda x: x >= 0, numbers))
print(non_negative)  


names = ["Alice", "Bob", "Angela", "Michael", "Amanda"]
a_names = list(filter(lambda name: name.startswith('A'), names))
print(a_names)


numbers = [3, 5, 9, 10, 12, 14, 18]
div_by_3 = list(filter(lambda x: x % 3 == 0, numbers))
print(div_by_3)  
