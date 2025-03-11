#პირველი ვარიანტი
numbers = [3, 7, 2, 9, 5]
max_number = max(numbers)
print(max_number)


#მეორე ვარიანტი
numbers = [3, 7, 2, 9, 5]
max_number = numbers[0] 

for num in numbers:
    if num > max_number:
        max_number = num

print(max_number)
