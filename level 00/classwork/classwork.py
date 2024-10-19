from turtle import*
speed(30)
width(4)



#კვადრატი
color("saddle brown")
begin_fill()  #გაფერადების დაწყება
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()  #გაფერადება დასრულებულია

forward(70)
#კარები
color("gray")
begin_fill()

left(90)
forward(120) #კარების სიმაღლე
right(90)
forward(60)
right(90)
forward(120)

end_fill()

penup()  #კალმის აღება
goto(200,200)
pendown()  #კალმის ჩამოღება

#სახურავი

color("saddle brown")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


exitonclick()