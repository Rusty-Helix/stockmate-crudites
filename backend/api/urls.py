from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notes/', views.getNotes, name='notes'), # endpoint 1: get all notes
    path('notes/<str:pk>/', views.getNote, name='note') # endpoint 2: get one note
]

# restful api