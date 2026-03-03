def rectangle_info(side1, side2):
    perimeter = (side1 + side2) * 2 
    area = side1 * side2
    return perimeter, area 

perimeter, area = rectangle_info(5, 10)

print("პერიმეტრი:", perimeter)
print("ფართობი:", area)