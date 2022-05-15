class BankAccount:
    def __init__(self,account_number):
        self.balance=0
    def withdraw(self,amount):
        if self.balance>=amount:
            self.balance-=amount
            print("Money Transfered Successfully")
        else:
            #print("Insufficient Funds")
            raise ValueError("Insufficient Funds")
    def deposit(self,amount):
        self.balance+=amount
    def get_balance(self):
        return self.balance

    #Transfer Amount method built by developer
def transfer_amount(acc1,acc2,amount):
    '''acc1.withdraw(amount)
       acc2.deposit(amount)
    '''
    try:
        acc1.withdraw(amount)
        acc2.deposit(amount)
        return True
    except ValueError as E:
        print(E)

#Creating bank Acccounts For User 1 and 2
user_1 = BankAccount("001")
user_2 = BankAccount("002")
user_1.deposit(250)
user_2.deposit(100)
print("User 1 Balance: {} /-".format(user_1.get_balance()))
print("User 2 Balance: {} /-".format(user_2.get_balance()))
print()

# transfring Amount
amt=int(input('Enter Transfer Amount:' ))
transfer_amount(user_1,user_2,amt)

print(" ")
print("Transfering",amt," from user1 to User2")
print("User1 Balance: {}/-".format(user_1.get_balance()))
print("User 2 Balance: {} /-".format(user_2.get_balance()))
