from django.db import models

class UserBolgData(models.Model):
    userId = models.IntegerField()
    title = models.CharField(max_length=500)
    body = models.TextField()
    
