# Sum of positive
def positive_sum(arr):
    return sum(num for num in arr if num > 0)

# String repeat
def repeat_str(repeat, string):
    return repeat * string

# Remove First and Last Character
def remove_char(s):
    return s[1:-1]

# Square(n) Sum
def square_sum(numbers):
    return sum(x**2 for x in numbers)

# Find the smallest integer in the array
def find_smallest_int(arr):
    return min(arr)