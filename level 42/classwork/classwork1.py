def sum_of_positive_squares(numbers):
    return sum(x**2 for x in numbers if x > 0)


nums = [-3, 4, -2, 5, 7, -1]
result = sum_of_positive_squares(nums)
print(result)
