def check_prime_num(n):
    is_prime=False
    factors=0
    for i in range(2,n):
        if n%i==0:
            factors+=1
    if factors==0:
        is_prime=True
    return is_prime

    

num=int(input('Insert Range: '))

prime_num_list=[]

for i in range(2,num+1):
    res=check_prime_num(i)
    if res:
        prime_num_list.append(i)
print(prime_num_list)

