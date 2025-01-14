cars = ["BMW , lambogini , porshe ,buggati, audi"]

print(cars[0])
print(cars[1])
print(cars[2])
print(cars[3])
print(cars[4])


numbers=[2,4,5]
numbers[0]=12
print(numbers[0]+numbers[2])




# მომხმარებელმა შემოიტანოს რიცხვი და შევინახოთ მთელი რიცხვის სახით
index = int(input("შეიყვანეთ რიცხვი (0-დან 10-მდე): "))

# სიის შექმნა 10 ელემენტით
my_list = ["0", " 1", "2", "3","4", "5", "6", "7", "8", "9","10"]

# შემოწმება, არის თუ არა რიცხვი სწორ დიაპაზონში
if 0 <= index < 10:
    print(my_list[index])
