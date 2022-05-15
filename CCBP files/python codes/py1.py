arr_a = [1,2,3,4,5,6,7,8,9,10,11,12,13]
a=list(map(int,input().split(",")))
l=len(a)

result=False
if l>=3 and l<14:
    for i in a:
        if i in arr_a:
            if a[0]==1 and a[1]==2:
                result=True
            elif a[0]==1 and a[1]!=2 and a[l-1]==13:
                result= True
            elif a[0]==1 and a[1]!=2 and a[l-1]!=13:
                result=False
            else:
                result=True

print(result)