from django.shortcuts import render
from .models import Category, Expense
from django.db.models import Sum
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    categories = []
    _categories = Category.objects.all()
    for category in _categories:
        total_expenditure = category.expense_set.filter(owner=request.user).aggregate(Sum('amount'))['amount__sum'] or 0
        categories.append({
            'category': category,
            'total_expenditure': total_expenditure
        })

    expenses = Expense.objects.filter(owner=request.user).order_by('-date')
    context = { 'categories': categories, 'expenses': expenses }
    return render(request, 'core/index.html', context)

@login_required
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
            new_expense = Expense.objects.create(category=category, amount=amount, name=name, date=date, owner=request.user)
        except Exception:
            res['message'] = 'Failed to create new expense!'
            code = 500
        else:
            res['message'] = 'New expense successfully created'
        return JsonResponse(res, status=code)