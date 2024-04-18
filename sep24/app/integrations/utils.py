from .models import ElinkPayment

def calculate_fee(transaction):
    # not in use presently
    # print(f'FEE:{transaction.amount_in}')
    # fee = (transaction.amount_in) * decimal.Decimal(10/100)

    return 3.45

def is_valid_payment_amount(amount_in):
    #for test just check if amount_in is at least $50

    if amount_in > 50:
        return True
    else:
        False

def initiate_refund(transaction):
    #Send User back his money using transaction model

    print('INITIATE REFUND')
    
def submit_payment(transaction):
    #use transaction to create and update a payment model

    try:
        payment = ElinkPayment.objects.get(transaction=transaction)
        payment.status = 'DELIVERED'
        payment.save()
        return payment

    except ElinkPayment.DoesNotExist:
        payment = ElinkPayment.objects.create(
            transaction=transaction,
        )
        payment.status = 'DELIVERED'
        payment.save()
        return payment
    
def get_payment(transaction):
    #return payment instance to poll_outgoing_transactions

    return ElinkPayment.objects.get(transaction=transaction)