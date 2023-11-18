from django.urls import path 
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),
    path('new_expense', views.new_expense, name='new_expense')
]