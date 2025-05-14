from django import forms
from users.models import CustomUser
from django.forms import EmailInput
from django.forms import ModelForm, TextInput, EmailInput, CharField, PasswordInput, ChoiceField, BooleanField, \
    NumberInput, DateInput
from .models import Event,Gallery,Contactus,Course
from ckeditor.widgets import CKEditorWidget

class EventForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({'class': 'form-control valid'})
        self.fields['description'].widget.attrs.update({'class': 'form-control valid'})
        
        
    class Meta:
            model = Event
            fields = ('name','description',)

class GalleryForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['title'].widget.attrs.update({'class': 'form-control valid'})
        self.fields['image'].widget.attrs.update({'class': 'form-control valid'})
        self.fields['description'].widget.attrs.update({'class': 'form-control valid'})
        
        
    class Meta:
            model = Gallery
            fields = ('title','image','description')


class ContactusForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({'class': 'form-control valid','placeholder':'Your Name'})
        self.fields['email'].widget.attrs.update({'class': 'form-control valid','placeholder':'Your Email'})
        self.fields['subject'].widget.attrs.update({'class': 'form-control valid','placeholder':'Your Subject'})
        self.fields['message'].widget.attrs.update({'class': 'form-control valid','placeholder':'Write your message'})
        
        
    class Meta:
            model = Contactus
            fields = ('name','email','subject','message')
            


class CourseForm(ModelForm):
    description = forms.CharField(widget=CKEditorWidget()) 
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['title'].widget.attrs.update({'class': 'form-control valid','placeholder':'Your Name'})
        self.fields['fees'].widget.attrs.update({'class': 'form-control valid','placeholder':'Your Email'})
        self.fields['image'].widget.attrs.update({'class': 'form-control valid','placeholder':'Your Subject'})
        self.fields['description'].widget.attrs.update({'class': 'form-control valid','placeholder':'Write your message'})
        
        
    class Meta:
            model = Course
            fields = ('title','fees','image','description')