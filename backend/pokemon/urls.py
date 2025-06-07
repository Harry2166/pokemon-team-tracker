
from django.urls import path
from . import views

urlpatterns = [
    path('get_all/', views.get_all_pokemon, name='all-pokemon'),
    path('insert/', views.insert_pokemon, name='insert-pokemon'),
]
