# 2.11 Area = 𝜋𝑅2
response = input("What is your radius?")
r = float(response)
area = 3.14159 * r ** 2
print("The area is", area)

#2.12
total_secs = int(input("how many seconds in total?"))
hours = total_secs // 3600
secs_still_remaining = total_secs % 3600 #%是餘數
minutes = secs_still_remaining // 60
secs_finally_remaining = secs_still_remaining % 60

print("Hrs=",  hours, "Min=", minutes, "Sec", secs_finally_remaining )
