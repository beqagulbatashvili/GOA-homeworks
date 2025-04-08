# Transportation on vacation
def rental_car_cost(d):
    discount = 0
    if d >= 7:
        discount = 50
    elif d >= 3:
        discount = 20
    return d * 40 - discount


# Quarter of the year
def quarter_of(month):
    if month <= 3:
        return 1
    elif month <= 6:
        return 2
    elif month <= 9:
        return 3
    else:
        return 4


# Remove exclamation marks
def remove_exclamation_marks(s):
    return s.replace('!', '')


# Volume of a Cuboid
def get_volume_of_cuboid(length, width, height):
    return length * width * height


# Total amount of points
def points(games):
    total = 0
    for game in games:
        x, y = game.split(':')
        x = int(x)
        y = int(y)
        if x > y:
            total += 3
        elif x == y:
            total += 1
    return total


# Jenny's secret message
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {name}!".format(name=name)


# Area or Perimeter
def area_or_perimeter(l, w):
    if l == w:
        return l * w
    else:
        return 2 * (l + w)