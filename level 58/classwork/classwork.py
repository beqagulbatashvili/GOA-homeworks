names = ["Alex", "John", "Andrew", "Emily", "Anna", "Tom", "Sophia", "Alan", "Nick", "Kate"]
renewed = [name for name in names if len(name) < 6 or name[0] == "A"]

print(renewed)



try:
    num = int(input("enter number"))
    print(num)
except:
    print("error")
