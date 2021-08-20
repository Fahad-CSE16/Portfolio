from rest_framework import serializers
from .models import Contact, ProjectWorks
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields='__all__'
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProjectWorks
        fields='__all__'
