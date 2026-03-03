# 1. Convert a Boolean to a String
def boolean_to_string(b):
    return str(b)


# 2. Summation of numbers from 1 to n
def summation(num):
    return sum(range(1, num + 1))


# 3. Function 1 - Hello World
def greet():
    return "hello world!"


# 4. Counting Sheep
def count_sheeps(sheep):
    return sheep.count(True)


# 5. Remove String Spaces
def no_space(x):
    return x.replace(" ", "")


# 6. You Can't Code Under Pressure #1 (Double a number)
def double_integer(i):
    return i * 2


# 7. Returning Strings
def greet(name):
    return f"Hello, {name} how are you doing today?"


# 8. Convert a Number to a String!
def number_to_string(num):
    return str(num)


# 9. Basic Mathematical Operations
def basic_op(operator, value1, value2):
    return eval(f"{value1} {operator} {value2}")


# 10. Keep Hydrated!
def litres(time):
    return time // 2


# 11. Century From Year
def century(year):
    return (year + 99) // 100


# 12. Convert Number to Reversed Array of Digits
def digitize(n):
    return list(map(int, str(n)[::-1]))