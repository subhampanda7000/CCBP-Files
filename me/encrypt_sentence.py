import re
def encrypt_sentence(msg):
    new_str=''
    msg_list=msg.split(" ")
    n=1
    for word in msg_list:
        if (n%2)!=0:
            rev_word=word[::-1]
            new_str+=rev_word+" "
        else:
            new_word=''
            cons=''
            vow=""
            for i in word:
                j=i.lower()
                #if j=="a" or j=="e" or j=="i" or j=="o" or j=="u": using or 
                if re.search("[aeiou]",j):  ##using regex.     returns true or false 
                    vow+=i
                else:
                    cons+=i
            new_word=cons+vow
            new_str+=new_word+" " 


        n+=1

    return new_str


sentence=input() #the sun rises in the east   #eht snu sesir ni eht stea
res=encrypt_sentence(sentence)
print(res)