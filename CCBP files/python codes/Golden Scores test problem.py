scores_list = list(map(int,input().split()))
l = len(scores_list)

for i in range(l-1):
    f=1
    for j in range(i+1,l):
        if scores_list[i] <= scores_list[j]:
            f=0
    if f==1:
        print(scores_list[i], end=' ')
print(scores_list[l-1], end=' ')