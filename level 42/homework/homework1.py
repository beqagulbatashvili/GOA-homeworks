def square_sum_odd_numbers(numbers):
    return sum(num for num in numbers if num % 2 != 0) ** 2


numbers = [1, 2, 3, 4, 5, 6, 7, 8]
print(square_sum_odd_numbers(numbers))
