# Convert a String to a Number!
def string_to_number(s):
    return int(s)

# Function 1 - hello world
def greet():
    return "hello world!"

# Counting Sheep
def count_sheeps(sheep):
    return sheep.count(True)

# Remove String Spaces
def no_space(x):
    return x.replace(" ", "")

# You Can't Code Under Pressure #1
def double_integer(i):
    return i * 2

# Convert a Boolean to a String
def boolean_to_string(b):
    return str(b)

# Basic Mathematical Operations
def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2
    else:
        return "Invalid operator"

# keep Hybrated
def litres(time):
    return time // 2

# Century From Year
def century(year):
    if year % 100 == 0:
        return int(year / 100)
    else:
        return int(year / 100) + 1

#Convert number to reversed array of digits
def digitize(n):
    str_number = str(n)
    rev_number = str_number[::-1]

    new_list = []
    for number in rev_number:
        new_list.append(int(number))

    return new_list