import turtle

paper = turtle.Screen()
leonardo = turtle.Turtle()
colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

#for element in [0, 1, 2, 3, 4, 5]:
for element in range(18): #same as above repeat 6 times
    leonardo.color(colors[element % len(colors)])
    if element % 2 == 0: #餘數
        leonardo.forward(100)
    else:
        leonardo.forward(50)
    leonardo.left(20)

    print(element)

paper.exitonclick() #draw until click on

# = assignment 賦值/assign the left a value
# == compare the things / whether the left and right is equal