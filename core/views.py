from django.shortcuts import render
from .models import Category, Expense

def index(request):
    categories = Category.objects.all()
    expenses = Expense.objects.all()
    context = { 'categories': categories, 'expenses': expenses }
    return render(request, 'core/index.html', context)