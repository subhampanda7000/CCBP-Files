ItemNumber= [101, 102, 103, 104]

ItemName= ['Milk', 'Cheese', 'Ghee', 'Bread']

Price= [42, 50, 500, 40]

Stock= [10, 20, 15, 16]

itemnum =input('item number: ')

quantity =input('quantity: ')
if itemnum.isdigit() and quantity.isdigit() and (int(itemnum) in ItemNumber):
    
    itemnum=int(itemnum)
    quantity=int(quantity)

    for i in range(len(ItemNumber)):
    
      if itemnum == ItemNumber[i]:
    
          indexx=i
          break
    
    if (quantity<=Stock[indexx]):
    
        print(quantity*Price[indexx],'INR')
    
        Stock=Stock[indexx]-quantity
    
        print(Stock,ItemName[indexx],'are left')
    
    elif quantity>Stock[indexx]:
    
        print("NO STOCK")
    
        print('only',Stock[indexx],ItemName[indexx],' are available')

else:
    print("INVALID INPUT")