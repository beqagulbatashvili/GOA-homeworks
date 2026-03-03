# Transportation on vacation
def rental_car_cost(d):
    if d >= 7: return d*40 - 50
    elif d >= 3: return d*40 - 20
    else: return d*40 

# Quarter of the year
def quarter_of(month):
    if month <= 3: return 1
    elif month <= 6: return 2
    elif month <= 9: return 3
    return 4

# Remove exclamation marks
def remove_exclamation_marks(s):
    return s.replace("!", "")

# Volume of a Cuboid
def get_volume_of_cuboid(length, width, height):
    return length * width * height

# Total amount of points
def points(games):
    score = 0
    
    for game in games:
        our_score = int(game[0])
        their_score = int(game[2])
        
        if our_score > their_score:
            score += 3
        elif our_score == their_score:
            score += 1
    
    return score

# Jenny's secret message
def greet(name):
    if name == "Johnny": return "Hello, my love!"
    return f"Hello, {name}!"

# Area or Perimeter
def area_or_perimeter(l , w):
    if l == w: return l*w
    else: return (l+w)*2

# Thinkful - Logic Drills: Traffic light
def update_light(current):
    if current == "green": return "yellow"
    elif current == "yellow": return "red"
    return "green"

# Third Angle of a Triangle
def other_angle(a, b):
    return 180-a-b


# L1: Set Alarm
def set_alarm(employed, vacation):
    if employed == vacation: return False
    elif employed == True and vacation == False: return True
    else: return False

# Sum Mixed Array
def sum_mix(arr):
    result = 0
    
    for i in arr: result += int(i)
    
    return result

# Sum without highest and lowest number
def sum_array(arr):
    if arr == None or arr == []: return 0
    
    arr.sort()
    return sum(arr[1:-1])

# Grasshopper - Messi goals function
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague

# Double Char
def double_char(s):
    res = ""
    for i in s:
        res += i * 2
    return res

# Parse nice int from char problem
def get_age(age):
    return int(age[0])
