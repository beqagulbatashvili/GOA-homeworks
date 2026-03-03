# Get input from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /): ")

# Perform the calculation based on the operator
if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    # Check if the second number is zero to avoid division by zero error
    if num2 == 0:
        result = "Error! Division by zero."
    else:
        result = num1 / num2
else:
    result = "Invalid operator!"

# Display the result
print(f"The result is: {result}")
