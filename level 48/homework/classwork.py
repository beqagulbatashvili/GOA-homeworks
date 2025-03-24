# How good are you really?
def better_than_average(class_points, your_points):
    total = sum(class_points)
    count = 0
    
    for i in class_points:
        count += 1
    
    return your_points > (total / count)

# Count of positives / sum of negatives
def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    positive_count = 0
    negative_sum = 0
    
    for num in arr:
        if num > 0:
            positive_count += 1
        elif num < 0:
            negative_sum += num
    
    return [positive_count, negative_sum]

# DNA to RNA Conversion
def dna_to_rna(dna):
    return dna.replace('T', 'U')

# Will you make it?
def zero_fuel(distance_to_pump, mpg, fuel_left):
    return fuel_left * mpg >= distance_to_pump

# Calculate BMI
def bmi(weight, height):
    bmi_value = weight / (height * height)
    
    if bmi_value <= 18.5:
        return "Underweight"
    if bmi_value <= 25.0:
        return "Normal"
    if bmi_value <= 30.0:
        return "Overweight"
    
    return "Obese"
