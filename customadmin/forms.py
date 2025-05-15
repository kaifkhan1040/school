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
        self.fields['student_name'].widget.attrs.update({'class': 'form-control valid','placeholder':'Student Name'})
        self.fields['parents_name'].widget.attrs.update({'class': 'form-control valid','placeholder':'Parents Name'})
        self.fields['parents_mobile_number'].widget.attrs.update({'class': 'form-control valid','placeholder':'parents Mobile Number'})
        self.fields['child_date_of_birth'].widget.attrs.update({'class': 'form-control valid','placeholder':'Child Date Of Birth'})
        self.fields['select_class_looking_for'].widget.attrs.update({'class': 'form-control valid','placeholder':'Select Class Looking For'})
        
        
    class Meta:
            model = Contactus
            fields = ('student_name','parents_name','parents_mobile_number','child_date_of_birth','select_class_looking_for')
            widgets = {
            'child_date_of_birth':DateInput(attrs={
                'type': 'date',
                'class': "form-control mb-2",}),}
            


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