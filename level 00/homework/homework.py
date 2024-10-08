from turtle import *
speed(30)
width(4)

#კვადრატი
color("brown")
begin_fill()

forward(220)
left(90)

forward(220)
left(90)

forward(220)
left(90)

forward(220)
left(90)
end_fill()
#კარები

forward(80)
color("gray")
begin_fill()
left(90)
forward(120) #სიმაღლე
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(220,220)
pendown()
#სახურავი
color("brown")
begin_fill()
right(150)
forward(220)
left(120)
forward(220)
end_fill()

penup()
goto(20,140)
pendown()


#ფანჯაარა 1
color("cyan")
begin_fill()

right(150)


forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)


forward(60)
right(90)

forward(60)
right(90)
end_fill()


penup()
goto(140,140)
pendown()

#ფანჯარა 2
begin_fill()
forward(60)
left(90)

forward(60)
left(90)

forward(60)
left(90)

forward(60)
left(90)

end_fill()



exitonclick()