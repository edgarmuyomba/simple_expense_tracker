from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name 
    
class Expense(models.Model):
    name = models.CharField(max_length=50)
    amount = models.BigIntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self) -> str:
        return self.name 