num=input()
l=len(num)
sum=0
for i in num:
    sum+=int(i)**l
if int(num)==sum:
    print("Armstrong")
else:
    print("Not armstrong")
