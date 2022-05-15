fhr=open("D:/python infy/newfile.txt","r")
'''a=fhr.readlines()  # reads and returns a list of all the elements
print(a)
print(type(a))  # list
for i in a:
    print(i, end=" ")
    '''

'''a=fhr.read()    # reads and returns a string
print(a)
print(type(a))  # string
'''


for i in fhr:
    print(i,end="")    # direct creation  and printing by for loop