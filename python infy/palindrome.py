
def check_palindrome(n):
    is_palindrome=False
    str_n=str(n)
    rev=str_n[::-1]
    if str_n==rev:
        is_palindrome=True
    else:
        is_palindrome=False
    return is_palindrome



num=input()                           #  1,121,225,111,353,458,657,88,44,66
num_list=num.split(",")
#num_list=map(int,num.split(","))

palindrome_list=[]
for i in num_list:
    res=check_palindrome(int(i))
    if res:
        palindrome_list.append(int(i))
print(palindrome_list)

