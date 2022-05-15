def getUniqueCharacter(s):
    list_s=list(s)
    uniq_list=[]
    for i in list_s:
        if list_s.count(i)==1:
            uniq_list.append(i)
    if len(uniq_list)!=0:
        first_alpha=uniq_list[0]
        print(uniq_list)
        index=(list_s.index(first_alpha))+1
        return index
    else:
        return -1
word=input()
res=getUniqueCharacter(word)
print(res)