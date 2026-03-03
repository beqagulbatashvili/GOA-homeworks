# 1)
# ეს პროგრამა ბეჭდავს ჩემს სახელს
# print ფუნქცია ეკრანზე რაღაც ტექსტის გამოსატანად გამოიყენება
print("Beqa Gulbatashvili")

# 2)
# ბეჭდავს ჩემს საყვარელ ციტატას ბრჭყალებით
print('"Never give up"')

#3)
# თითო სტრიქონი ცალკე იბეჭდება
print("Roses are red")
print("Violets are blue")
print("Coding is fun")


# 4)
# ბეჭდავს 2 და 3-ის ჯამს
# print შეუძლია გამოათვალოს და გამოიტანოს შედეგი
print(2 + 3)


#5)# ბეჭდავს სამკუთხედის ფორმას
# სიმბოლოებით ვხატავთ მარტივ ფიგურას
print("*")
print("**")
print("***")


# 6)# რიცხვიანი სტრინგი ვაქციეთ რიცხვად და დავბეჭდეთ
number = "42" # სტრინგი, რომელიც რიცხვს ჰგავს
converted = int(number) # int გარდაქმნის სტრინგს ნამდვილ რიცხვად
print(converted) # შედეგის ბეჭდვა


# 7)
# ორი ათწილადი დავამატეთ და შედეგი დავბეჭდეთ
a = 3.5 # პირველი ათწილადი
b = 2.5 # მეორე ათწილადი
print(a + b) #ჯამი


# 8)
# ორი სტრიქონი გავაერთიანეთ და დავბეჭდეთ
first = "Hello" # პირველი სიტყვა
second = "World" # მეორე სიტყვა
print(first + " " + second) # + აერთიანებს სტრიქონებს, " " არის გამყოფი ჰარი


# 9)
# ტიპები ვბეჭდავთ თითო ცვლადისთვის
a = 5 # მთელი რიცხვი (int)
b = "hello" # სტრიქონი (str)
c = 3.14 # ათწილადი (float)
print(type(a)) # ტიპი a-სთვის
print(type(b)) # ტიპი b-სთვის
print(type(c)) # ტიპი c-სთვის

# 10)
# მომხმარებელს ვკითხავთ ასაკს, გადავაქცევთ და +1 დავამატებთ
age = input("Enter your age: ")
next_year = int(age) + 1 # გადავაქცევთ რიცხვად და დავამატებთ 1-ს
print("Next year you will be", next_year) # შედეგის ბეჭდვა

# 11)
# მომხმარებელს ვკითხავთ სახელს და მივესალმებით
name = input("What is your name? ") # ვიღებთ სახელს
print("Hello", name + "!") # მივესალმებით და დავამატებთ "!"

# 12)
# მომხმარებელს ვკითხავთ ასაკს და ვაგეგმავთ მომავალ წელს
age = input("How old are you? ") # ვკითხავთ ასაკს
print("Next year you will be", int(age) + 1) # მომავალ წელს +1

# 13)
# ორი რიცხვი შეგვყავს და მათ ჯამს ვბეჭდავთ
num1 = input("Enter first number: ") # პირველი რიცხვი
num2 = input("Enter second number: ") # მეორე რიცხვი
print("Sum is", int(num1) + int(num2)) # ჯამის გამოთვლა და ბეჭდვა

# 14)
# მომხმარებელს ვკითხავთ საყვარელ ფერს
color = input("What is your favorite color? ") # ფერის შეტანა
print("Your favorite color is", color + "!") # პასუხის ბეჭდვა

# 15)
# ვამოწმებთ არის თუ არა მომხმარებელი 150 სმ-ზე მაღალი
height = input("Enter your height in cm: ") # სიმაღლის შეტანა
if int(height) > 150: # ვამოწმებთ არის თუ არა მეტი 150-ზე
    print("You are tall enough") # თუ მეტია
else:
    print("You are not tall enough") # თუ ნაკლებია ან ტოლია

# 16)
# ციკლით ვბეჭდავთ 1-დან 5-მდე რიცხვებს
for i in range(1, 6): # ციკლი 1-დან 5-მდე (6 არ ჩაგვითვლება)
    print(i) # ყოველ რიცხვს ბეჭდავს

# 17)
# სტრინგის თითო ასო ცალკე სტრიქონზე იბეჭდება
word = "Python" # სიტყვა
for letter in word: # თითო ასო word-ში
    print(letter) # ასოს ბეჭდვა

# 18)
# 1-დან 10-მდე რიცხვების ჯამი
total = 0 # საწყისი ჯამი
for i in range(1, 11): # 1-დან 10-მდე
    total = total + i # ჯამში ვუმატებთ i-ს
print(total) # საბოლოო შედეგი

# 19)
# 2-ის ჯერადი ცხრილი 1-დან 5-მდე
for i in range(1, 6): # ციკლი 1-დან 5-მდე
    print("2 x", i, "=", 2 * i) # შედეგის ბეჭდვა

# 20)
# ყველა ლუწი რიცხვი 2-დან 20-მდე
for i in range(2, 21, 2): # ვიწყებთ 2-დან და ვამატებთ 2-ს
    print(i)

# 21)
# while ციკლით 1-დან 5-მდე რიცხვები
i = 1 # საწყისი მნიშვნელობა
while i <= 5: # სანამ i ნაკლებია ან ტოლი 5-ზე
    print(i)
    i = i + 1 # i-ს ვუმატებთ 1-ს

# 22
# while ციკლით 1-დან 5-მდე რიცხვების ჯამი
i = 1
total = 0
while i <= 5:
    total = total + i # ვუმატებთ i-ს ჯამს
    i = i + 1
print(total)

# 23)
# 10-დან 1-მდე უკუსვლა
i = 10
while i >= 1: # სანამ i მეტი ან ტოლია 1-ზე
    print(i)
    i = i - 1 # i-ს ვაკლებთ 1-ს

# 24)
# ყველა კენტი რიცხვი 1-დან 10-მდე
i = 1
while i <= 10:
    if i % 2 == 1: # თუ ნაშთი 1-ია, მაშინ კენტია
        print(i)
    i = i + 1

# 25)
# input-ს ვითხოვთ სანამ მომხმარებელი exit-ს არ შეიყვანს
text = "" # საწყისი მნიშვნელობა
while text != "exit": # სანამ exit არ შეიყვანა
    text = input("Enter something (type 'exit' to stop): ")

# 26)
# ვქმნით სიას 3 ელემენტით
items = ["apple", "banana", "cherry"]

# for ციკლით თითო ელემენტს ვბეჭდავთ
for item in items:
    print(item)

# 27)
# ვქმნით სიას
fruits = ["apple", "banana", "kiwi"]

# len() აბრუნებს სიაში არსებული ელემენტების რაოდენობას
print(len(fruits))

# 28)
# ვქმნით რიცხვების სიას
numbers = [10, 20, 30]

# მეორე ელემენტი არის ინდექსით 1 (რიცხვი 20)
print(numbers[1])

# 29)
# ვქმნით სიას 3 ელემენტით
names = ["Beka", "Luka", "Ana"]

# append ამატებს ახალ ელემენტს სიას ბოლოში
names.append("Nika")

# დაბეჭდავს განახლებულ სიას
print(names)

# 30)
# ვქმნით სიას
colors = ["red", "blue", "green"]

# remove ფუნქცია შლის მითითებულ ელემენტს სიიდან
colors.remove("blue")

# დაბეჭდავს განახლებულ სიას
print(colors)

# 31)
# list comprehension ქმნის სიას სადაც ყველა რიცხვი აიწევა კვადრატში
squares = [x * x for x in range(1, 6)]

print(squares)

# 32)
# ვქმნით სიას სადაც შევიტანთ 2-დან 10-მდე ყველა ლუწ რიცხვს
evens = [x for x in range(2, 11) if x % 2 == 0]

print(evens)

# 33)
# მოცემული სიიდან ვიღებთ მხოლოდ კენტ რიცხვებს
numbers = [1, 2, 3, 4, 5, 6, 7]
odds = [x for x in numbers if x % 2 == 1]

print(odds)

# 34)
# list comprehension-ით ყველა სტრინგს ვაქცევთ დიდი ასოებით
words = ["hello", "world", "python"]
uppercased = [word.upper() for word in words]

print(uppercased)

# 35)
# სიაში შევიტანთ მხოლოდ იმ რიცხვებს რომლებიც ლუწია და ავწევთ კვადრატში
nums = [1, 2, 3, 4, 5, 6]
squares = [x * x for x in nums if x % 2 == 0]

print(squares)

# 36)
# ფუნქცია რომელსაც სახელი გადაეცემა და მიესალმება მას
def greet(name):
    print("Hello", name + "!")

greet("Beqa")

# 37)
# ფუნქცია ორი რიცხვის დასამატებლად და ჯამის დასაბრუნებლად
def add(a, b):
    return a + b

result = add(3, 4)
print(result)

# 38)
# ფუნქცია რომელიც აბრუნებს ტექსტს რიცხვი კენტია თუ ლუწი
def check_even_odd(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_even_odd(7))

# 39)
# ფუნქცია მართკუთხედის ფართობის გამოსათვლელად
def rectangle_area(length, width):
    return length * width

print(rectangle_area(5, 3))

# 40)
# ფუნქცია რომელიც აბრუნებს შებრუნებულ სტრიქონს
def reverse_string(text):
    return text[::-1]

print(reverse_string("hello"))

# 41)
# ვქმნით ტუპლს (მუდმივი სია) 3 განსხვავებული ტიპის ელემენტით
my_tuple = (10, "Beka", 3.14)

# ვბეჭდავთ ტუპლს
print(my_tuple)

# 42)
# ვქმნით ტუპლს
items = ("apple", "banana", "cherry")

# მეორე ელემენტი არის ინდექსით 1
print(items[1])

# 43)
# ვქმნით ტუპლს
colors = ("red", "green", "blue")

# len() აბრუნებს ელემენტების რაოდენობას
print(len(colors))

# 44)
# ორი ტუპლი
a = (1, 2, 3)
b = (4, 5)

# + ოპერატორით ვაერთიანებთ
result = a + b

print(result)

# 45)
# ტუპლი
names = ("Beka", "Luka", "Nika")

# if-ის მეშვეობით ვამოწმებთ არის თუ არა ელემენტი
if "Luka" in names:
    print("Found")
else:
    print("Not found")

# 46)
# set არის უნიკალური ელემენტების კოლექცია
my_set = {1, 2, "apple"}

# ვბეჭდავთ set-ს
print(my_set)

# 47)
# set
items = {"banana", "kiwi", "grape"}

# if-ში ვამოწმებთ არის თუ არა ელემენტი
if "kiwi" in items:
    print("Yes")
else:
    print("No")

# 48)
# ვქმნით set-ს
fruits = {"apple", "banana"}

# add() ამატებს ელემენტს
fruits.add("cherry")

# დაბეჭდავს განახლებულ set-ს
print(fruits)

# 49)
# ვქმნით set-ს
numbers = {1, 2, 3}

# remove() შლის მითითებულ ელემენტს
numbers.remove(2)

print(numbers)

# 50)
# ორი set
a = {1, 2, 3}
b = {3, 4, 5}

# | ოპერატორით ვაერთიანებთ ორივე set-ს
union_set = a | b

print(union_set)

# 51)
# dictionary არის key-value წყვილები
person = {"name": "Beka", "age": 13}

# ვბეჭდავთ dictionary-ს
print(person)

# 52)
# dictionary
student = {"name": "Beka", "grade": 8}

# მივწვდებით "name" key-ს მნიშვნელობას
print(student["name"])

# 53)
# ვქმნით dictionary-ს
info = {"city": "Tbilisi"}

# ვამატებთ ახალ key-value წყვილს
info["country"] = "Georgia"

# ვბეჭდავთ განახლებულ dictionary-ს
print(info)
