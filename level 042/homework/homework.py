def sum_even_numbers(numbers):
    return sum(num for num in numbers if num % 2 == 0)


numbers = [1, 2, 3, 4, 5, 6, 7, 8]
print(sum_even_numbers(numbers))
