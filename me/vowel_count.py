import re


def vowel_count(sentence):
    list_a=list(sentence)
    vowels=0
    consonats=0
    others=0
    for i in list_a:
        chr=i.lower()
        if re.search("[a-z]",chr):
            if re.search("[aeiou]",chr):
                vowels+=1
            else:
                consonats+=1
        else:
            others+=1


    return "{"+"vowels: {} , consonants: {}, others {}".format(vowels,consonats,others)+"}"




sen = input()  #I love python and it so easy to learn
res=vowel_count(sen)
print(res)