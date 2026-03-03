def no_duplicates(user_list):
    return list(set(user_list))


print(no_duplicates([1, 2, 3, 1, 2, 4]))
print(no_duplicates(["apple", "banana", "apple", "cherry"]))
print(no_duplicates([5, 5, 6, 7, 8, 6, 9]))
