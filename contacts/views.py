from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from .models import Contact
from .serializers import ContactSerializer,ProjectSerializer
from rest_framework import permissions, serializers,status
from rest_framework.response import Response
# Create your views here.
class ContactView(APIView):
    def post(self,request,format=None):
        serializer=ContactSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            serializer.save()
            data['response']="Successfully Sent"
        else:
            data=serializer.errors
        return Response(data)
from .models import ProjectWorks
class ProjectsListCreateAPIView(ListCreateAPIView):
    queryset=ProjectWorks.objects.all()
    serializer_class=ProjectSerializer
    permission_classes=[permissions.AllowAny,]
    
