# Input score
score = float(input("Enter the score (0-100): "))


if 90 <= score <= 100:
    grade = "A"
elif 80 <= score < 90:
    grade = "B"
elif 70 <= score < 80:
    grade = "C"
elif 60 <= score < 70:
    grade = "D"
elif score < 60:
    grade = "F"
else:
    grade = "Invalid score"

# Output grade
print(grade)    