N = int(input())

for i in range(1,N+1):
    c=i
    k=N-1
    new_list=""
    for j in range(1,i+1):
        new_list+=str(c)+" "
        c+=k
        k-=1
    print(new_list)
    
    # input = 3
    
    #Output = 
    # 1
    # 2 4
    # 3 5 6