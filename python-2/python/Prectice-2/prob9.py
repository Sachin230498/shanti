#WAP to find the greatest of 3 numbers entered by the user.




num1 = int(input("Enter first number you want to check: "))
num2 = int(input("Enter second number you want to check: "))
num3 = int(input("Enter third number you want to check: "))
num4 = int(input("Enter fourth number you want to check: "))


if(num1 >= num2 and num1 >= num3 and num1 >= num4):
    print("num1 must be greater ", num1)
elif(num2 >= num3 and num2 >= num4 ):
    print("num2 must be greater", num2)
elif(num3 >= num4):
    print("num3 must be greater", num3)
else:
    print("num4 must be greater", num4)