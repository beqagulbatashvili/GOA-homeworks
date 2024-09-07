from turtle import*

#square
width(5)
speed(5)
color("blue")
forward(200)

left(90)

forward(200)

left(90)

forward(200)

left(90)

forward(200)

left(90)

#door
begin_fill()

forward(70)

color("red")

left(90)

forward(90)

right(90)

forward(55)

right(90)

forward(90)

end_fill()

penup()
goto(200,200)
pendown()



begin_fill()

color("orange")

right(150)

forward(200)

left(120)

forward(200)

end_fill()


#windows

penup()
goto(200,180)
pendown()

begin_fill()

color("black")
right(60)

forward(50)

left(90)

forward(60)

left(90)

forward(50)

end_fill()




penup()
goto(0,180)
pendown()

begin_fill()

color("black")

forward(50)

right(90)

forward(60)

right(90)

forward(50)

end_fill()




exitonclick()