# 1
def divide_numbers():
    try:
        num1_str = input("Enter the first number: ")
        num2_str = input("Enter the second number: ")

        num1 = float(num1_str)
        num2 = float(num2_str)

        if num2 == 0:
            print("Error: Cannot divide by zero.")
        else:
            result = num1 / num2
            print(f"{num1} divided by {num2} is: {result}")

    except ValueError:
        print("Error: Invalid input. Please enter numeric values.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    divide_numbers()


# 2
def string_to_integer():
    user_input = input("Enter a string that represents an integer: ")

    try:
        integer_value = int(user_input)
        print(f"Successfully converted to integer: {integer_value}, with type: {type(integer_value)}")
    except ValueError:
        print(f"Error: '{user_input}' is not a valid integer.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

string_to_integer()


# 3
def access_list_element():
    my_list = [10, 20, 30, 40, 50]
    print(f"The list is: {my_list}")

    try:
        index_str = input("Enter an index number to access an element: ")
        index = int(index_str)

        if 0 <= index < len(my_list):
            print(f"The element at index {index} is: {my_list[index]}")
        else:
            print(f"Error: Index {index} is out of range. Valid indices are from 0 to {len(my_list) - 1}.")

    except ValueError:
        print("Error: Invalid input. Please enter a valid integer for the index.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

access_list_element()


# 4
def add_two_numbers():
    try:
        value1_str = input("Enter the first number: ")
        value2_str = input("Enter the second number: ")

        num1 = int(value1_str)
        num2 = int(value2_str)

        sum_result = num1 + num2
        print(f"The sum of {num1} and {num2} is: {sum_result}")

    except ValueError:
        print("Error: Invalid input. Please enter valid integer numbers.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

add_two_numbers()


# 5
def safe_list_removal():
    my_list = ["apple", "banana", "cherry", "date"]
    print(f"The list is: {my_list}")

    item_to_remove = input("Enter an item to remove from the list: ")

    try:
        my_list.remove(item_to_remove)
        print(f"'{item_to_remove}' has been removed. The updated list is: {my_list}")
    except ValueError:
        print(f"Error: '{item_to_remove}' is not in the list.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

safe_list_removal()