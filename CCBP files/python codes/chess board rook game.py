def rooks_are_safe(matrix,n):
  for i in range(0,n):
    sum=0
    for j in range(0,n):
      sum+=matrix[i][j]
    if sum>1:
      return 1
  for i in range(0,n):
    sum=0
    for j in range(0,n):
      sum+=matrix[j][i]
    if sum>1:
      return 1
  if sum<=1:
    return 0

n=int(input())
matrix=[]
for i in range(n):         
    a =[]
    for j in range(n):      
         a.append(int(input()))
    matrix.append(a)
if rooks_are_safe(matrix,n):
  print(False)
else:
  print(True)