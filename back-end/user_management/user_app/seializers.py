from rest_framework import serializers
from .models import UserBolgData
class UserBolgDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBolgData
        fields = '__all__'