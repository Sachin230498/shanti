#Nested Condition

username = "Rebon@12"
password = "Password"

nameinput = input("enter your username :")
passinput = input("enter your password :")



if(username == nameinput):
    if(password == passinput):
        print("Login successful")
    else:
        print("Wrong password")
    
else:
    print("Wrong username or password")
