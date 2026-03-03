from turtle import*

speed(30)#სისწრაფე
width(5)

#მართკუთხედი 01
color("gray")
begin_fill()

forward(220)
right(90)

forward(200)#სიმაღლე
right(90)

forward(220)
right(90)

forward(200)
right(90)

end_fill()

penup()
goto(0,-200)
pendown()


#მართკუთხედი 02
color("gray")
begin_fill()

left(180)

forward(100)
right(90)

forward(300)#სიმაღლე
right(90)

forward(100)
right(90)

forward(300)
right(90)


end_fill()


penup()
goto(220,-200)
pendown()

#მართკუთხედი 03
color("gray")
begin_fill()


left(180)

forward(100)
left(90)

forward(300)#სიმაღლე
left(90)

forward(100)
left(90)

forward(300)
left(90)


end_fill()


penup()
goto(220,100)
pendown()

#სამკუთხედი 01
color("orange")
begin_fill()
left(90)

left(330)
forward(100)


left(600)
forward(100)
end_fill()



penup()
goto(-100,100)
pendown()


#სამკუთხედი 02
color("orange")
begin_fill()


left(90)

right(330)
forward(100)


left(600)
forward(100)

end_fill()


penup()
goto(55,0)
pendown()

#მართკუთხედი 04
color("gray")
begin_fill()


left(150)
forward(200)

right(90)
forward(110)


right(90)
forward(200)


end_fill()


penup()
goto(165,200)
pendown()

#სამკუთედი 03
color("orange")
begin_fill()

right(150)
forward(110)

left(480)
forward(110)


end_fill()



penup()
goto(50,-200)
pendown()

#კარი
color("brown")
begin_fill()


right(150)

forward(150)

right(90)

forward(120)

right(90)
forward(150)


end_fill()



exitonclick()