try:
    num1 = float(input("შეიყვანე პირველი რიცხვი: "))
    num2 = float(input("შეიყვანე მეორე რიცხვი: "))
    result = num1 / num2
    print(result)
except ValueError:
    print("შეიყვანე ვალიდური რიცხვი")
except ZeroDivisionError:
    print("ნულზე გაყოფა არ შეიძლება")
except:
    print("მოულოდნელი შეცდომა მოხდა")
