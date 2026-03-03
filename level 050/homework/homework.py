# 1)
students = {"Ana": 90, "Giorgi": 85, "Mariam": 92}
print(students)

# 2)
countries = {"Georgia": "Tbilisi", "France": "Paris", "Italy": "Rome", "Germany": "Berlin", "USA": "Washington D.C."}
print(countries.values())

# 3)
cars = {"Toyota": "Camry", "BMW": "M5", "Mercedes": "E-Class"}
print(cars["BMW"])

# 5)
book = {"Name": "Harry Potter", "Author": "J.K. Rowling", "Year": 1997}
book["Year"] = 2000 
print(book)

# 6)
points = {"Ana": 85, "Giorgi": 90, "Mariam": 80}
average = sum(points.values()) / len(points)
print("საშუალო ქულა:", average)

# 7)
user = {}
user["Name"] = input("შეიყვანე სახელი: ")
user["Surname"] = input("შეიყვანე გვარი: ")
user["Age"] = input("შეიყვანე ასაკი: ")
user["Height"] = input("შეიყვანე სიმაღლე: ")
user["Career"] = input("შეიყვანე პროფესია: ")
print(user)
