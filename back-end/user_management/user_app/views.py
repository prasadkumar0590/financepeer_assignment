from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import json
from utility.process_data import process_data, get_processed_data
class JsonUploadView(APIView):
    permission_classes = (IsAuthenticated, )
  
    def post(self, request):
        response = process_data(request)
        return Response(response)
    
    def get(self, request):
        data = get_processed_data()
        return Response(data)