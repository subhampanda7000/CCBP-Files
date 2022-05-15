import random;
play=input("Play??? (y/n) ")
if play=="y":
    while play=="y":
        user_inp=int(input("0 For Rock 1 for Paper 2 Scissor  " ))
        print()
        com_inp=random.randint(0,2)
        if user_inp > 2 or user_inp<0:
            print(" Invalid Input")
        else:
            if (user_inp==com_inp):
                print("Match Draw")
            elif (user_inp==0 and com_inp == 2) or (user_inp == 1 and com_inp == 0) or (user_inp==2 and com_inp == 1):
                print("You Are The Winner !!!")
            else:
                print("Computer Winns !!!")
            stop=input("play ??? (y/n) ")
            play=stop
            if stop == "n":
                print("End !!!")
                break
else:
    print("End !!!")