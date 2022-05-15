def digits_product(n):
    p = 1
    while n > 0:
        d = n % 10
        p *= d
        n //= 10
    return p
n = int(input('Enter Number '))   
print("The digit Product is: ",digits_product(n))