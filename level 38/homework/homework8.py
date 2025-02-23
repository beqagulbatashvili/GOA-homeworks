def sum_divisible_by_3(start, end):
    total = 0
    for num in range(start, end + 1):
        if num % 3 == 0:
            total += num
    return total

print(sum_divisible_by_3(1, 100))
