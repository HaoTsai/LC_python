x = int(input("Please give me a number x ?"))
y = int(input("Please give me a number y ?"))
if x < y :
    print("x<y")
elif x > y :
    print("x>y")
else:
    print ("x==y")


x = int(input("Please give me a number x ?"))
if x % 2 == 0:
    print(x, "is even.")
    print("Did you know that 2 is the only even number that is prime")
else:
    print(x, "is odd.")
    print("Did you know that multiplying two odd numbers " + "always gives an odd result?")