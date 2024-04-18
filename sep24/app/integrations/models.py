from django.db import models
from polaris.models import Transaction

class ElinkPayment(models.Model):
    """
    To track the completion of Withdraw Transactions.
    Works hand in hand with the Polaris Transaction Model.
    """

    choices = (
        ('DELIVERED', 'DELIVERED'),
        ('INITIALIZED', 'INITIALIZED'),
        ('FAILED', 'FAILED')
    )

    transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE)
    status      = models.CharField(max_length=20, choices=choices, default='INITIALIZED')