def find_minimum(user_list):

    min_value = user_list[0]
    
    for num in user_list:
        if num < min_value:
            min_value = num
    
    print("ყველაზე პატარა რიცხვია:", min_value)


find_minimum([5, 3, 8, 2, 7])
find_minimum([10, 20, 30, 5, 15])
find_minimum([100, 50, 25, 75, 60])
find_minimum([-1, -5, 0, -3, -2])
find_minimum([42, 42, 42, 42])
