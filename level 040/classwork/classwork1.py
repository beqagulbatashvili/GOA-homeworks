# Even or Odd
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
# Opposite number
def opposite(number):
    if number > 0:
        return number/-1
    else:
        return number*-1
    
# Convert boolean values to strings 'Yes' or 'No'
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"

# Convert a Number to a String!
def number_to_string(num):
    return str(num)

# Reversed Strings
def solution(string):
    return string[::-1]

# Return Negative
def make_negative( number ):
    if number > 0:
        return number * -1
    else:
        return number
    
# Multiply
def multiply(a, b):
    return a * b