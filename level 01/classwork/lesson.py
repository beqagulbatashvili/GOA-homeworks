name = "beqa"
name #არის ცვლადი
# = არის ცვლადისთვის მნიშვნელობის მიმნიჭებელი სიმბოლო
# "Beqa" არის ცვლადისთვის მნიშვნელობა
surname = "Gulbatashvili"

print(name)
# # პრინტ ფუნქციას გადაეცემა ეკრანზე გამოსატანი ობიექტი

name = "Beqa" # ეს არის str(string) ტიპის ცვლადი
age = 13 # ეს არის int(integer) მთელი რიცხვი
height = 1.75 # ეს არის float ტიპის ცვლადი (ათწილადი)

knows_programming = True # True ან False
is_ugly = False # snakecase(უბრალო წერის სტილი სტანდარტული)
print(name + " " + surname)
# # სტრინგი არის ბრჭყალებში მოქცეული სიმბოლოები
print(name + age)
print(type(age)) # age გადაეცა type ფუნქციას, რომელმაც დააბრუნა მისი ტიპი
# და დაბრუნებული ნებისმიერი სიტყვა დავპრინტეთ, რომელმაც გაგვაგებინა რომ
# print(type(age)) - ის ტიპი არის int(integer) (მთელი რიცხვი)
print(type(age)) 
print(type(name))
print(type(surname))
print(type(height))
print(type(knows_programming))