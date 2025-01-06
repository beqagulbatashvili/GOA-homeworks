# პირველი და მეორე რიცხვის შეყვანა
num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))

# შეამოწმოთ რიცხვების შედარება და შეიქმნას შესაბამისი დიაპაზონი
if num1 > num2:
    for i in range(num2, num1 + 1):
        print(i)
elif num2 > num1:
    for i in range(num1, num2 + 1):
        print(i)
else:
    print("numbers are equal")