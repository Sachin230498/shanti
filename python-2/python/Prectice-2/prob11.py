










num1 = int(input("Enter first number you want to check: "))
num2 = int(input("Enter second number you want to check: "))
num3 = int(input("Enter third number you want to check: "))


if(num1 >= num2 and num1 >= num3):
    print("num1 must be greater ", num1)
elif(num2 >= num3 ):
    print("num2 must be greater", num2)
else:
    print("num3 must be greater", num3)
