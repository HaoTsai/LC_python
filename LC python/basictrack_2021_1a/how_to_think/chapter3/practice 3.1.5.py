import turtle
window = turtle.Screen()
powerranger=turtle.Turtle()
for i in [0, 1, 2, 3]:              #provided to make the loop body execute 4 times.
    powerranger.forward(50)
    powerranger.left(90)

colors=["yellow", "red", "purple", "blue" ]
for color in colors:
    powerranger.color(color)
    powerranger.foward(50)
    powerranger.left(90)