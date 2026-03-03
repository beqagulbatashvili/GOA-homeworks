def filter_positive(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

print(filter_positive([-5, 10, -3, 0, 8, 7]))
