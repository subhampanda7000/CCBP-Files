T = int(input())

for i in range(T):
    B,P = input().split()
    B=int(B)
    P=int(P)
    book_price = sorted(list(map(int,input().split())))
    buy_books = []
    for i in book_price:
        if i<=P:
            P=P-i
            buy_books.append(i)
    print(len(buy_books))