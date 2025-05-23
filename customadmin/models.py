from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Gallery(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='gallery_images/')
    description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Contactus(models.Model):
    student_name = models.CharField(max_length=255)
    parents_name = models.CharField(max_length=255)
    parents_mobile_number = models.CharField(max_length=10)
    child_date_of_birth = models.DateField(null=True,blank=True)
    select_class_looking_for  = models.CharField(choices=[('P.Nursery','P.Nursery'),('Nursery','Nursery')])

    def __str__(self):
        return self.name
    

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextField()
    fees = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='course_images/', null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title