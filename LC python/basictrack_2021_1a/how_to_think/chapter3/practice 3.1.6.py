import turtle
window = turtle.Screen()
window.bgcolor("orange")
tess = turtle.Turtle()
tess.shape("triangle")
tess.color("pink")
tess.penup()
size = 10
for _ in range(90):
   tess.stamp()
   size = size + 3
   tess.forward(size)
   tess.right(24)
window.mainloop()

