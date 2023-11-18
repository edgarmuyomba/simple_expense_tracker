from django.shortcuts import render
from .models import Category, Expense
from django.db.models import Sum
from django.http import JsonResponse

def index(request):
    categories = []
    _categories = Category.objects.all()
    for category in _categories:
        total_expenditure = category.expense_set.aggregate(Sum('amount'))['amount__sum'] or 0
        categories.append({
            'category': category,
            'total_expenditure': total_expenditure
        })

    expenses = Expense.objects.all().order_by('-date')
    context = { 'categories': categories, 'expenses': expenses }
    return render(request, 'core/index.html', context)

def new_expense(request):
    res = { 'message': '' }
    code = 200
    if request.method == 'POST':
        _category = request.POST['category']
        category = Category.objects.filter(name=_category).first()
        name = request.POST['name']
        amount = request.POST['amount']
        date = request.POST['date']
        try:
            new_expense = Expense.objects.create(category=category, amount=amount, name=name, date=date)
        except Exception:
            res['message'] = 'Failed to create new expense!'
            code = 500
        else:
            res['message'] = 'New expense successfully created'
        return JsonResponse(res, status=code)