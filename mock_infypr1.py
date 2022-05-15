def check_prime_num(n):
    is_prime = False
    if num == 2:
        is_prime = True
    else:
        factor = 0
        for i in range(2, n):
            if n % i == 0:
                factor += 1
        if factor == 0:
            is_prime = True
    return is_prime    
         
       
inputstring = input()
num = int(inputstring)

prime_list = []
if num > 0:
    for i in range(2, num):
        c = check_prime_num(i)
        if c:
            prime_list.append(i)

    ln = len(prime_list)

    new_list = []
    for j in range(0, ln-1):
        if (prime_list[j]-prime_list[j+1]) == -2:
            d = str(prime_list[j])+":"+str(prime_list[j+1])
            new_list.append(d)
    if len(new_list) == 0:
        print(0)
    else:
        new_str = ",".join(new_list)
        print(new_str)
else:
    print(-1)




        
    
    
    