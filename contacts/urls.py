from django.urls import path
from .views import ContactView,ProjectsListCreateAPIView
urlpatterns = [
    path('contacts/',ContactView.as_view(), name='contact' ),
    path('projects/',ProjectsListCreateAPIView.as_view(), name='projects' ),
]