# Initialize variables
correct_password = "Goa best"
incorrect_count = 0

# Start a while loop to keep asking for the password
while True:
    # Ask the user to input the password
    password = input("Enter the password: ")

    # Check if the entered password is correct
    if password == correct_password:
        print("Access granted!")
        break  # Exit the loop if the password is correct
    else:
        incorrect_count += 1  # Increment the incorrect password counter
        print("Incorrect password. Attempts so far")
