from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField( max_length=254)
    message=models.TextField()
    def __str__(self):
        return self.message
from ckeditor.fields import RichTextField
class ProjectWorks(models.Model):
    name=models.CharField(max_length=100)
    description=RichTextField()
    tools=models.TextField()
    contribution=models.TextField()
    urls=models.URLField()
    rank=models.FloatField(blank=True, null=True)
    class Meta:
        ordering = ['-rank',]
    def __str__(self):
        return self.name
    