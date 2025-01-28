from turtle import*
def square(x_cor, y_cor):
    penup()
    goto(x_cor,y_cor)
    pendown()

    for i in range (4):
        forward(200)
        left(90)



square(100,100)
square(-300,100)
square(-300,-300)
square(100,-300)