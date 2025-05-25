from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse_lazy
from .models import Event,Gallery,Contactus,Course,Notice
from .forms import EventForm,GalleryForm,ContactusForm,CourseForm,NoticeForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.http import require_GET

# Create your views here.
def index(request):
    return render(request,'customadmin/index.html')

def event(request):
    event = Event.objects.all()
    return render(request,'customadmin/eventlist.html',{'event':event})

def add_event(request,id=None):
    print('run')
    if request.method == "POST":
        print('post')
        print(request.POST)
        obj=None
        if id:
            obj = get_object_or_404(Event, id=id)
            form = EventForm(request.POST,instance=obj)
        else:
            form = EventForm(request.POST)
        if form.is_valid():
            form.save()
            
            messages.success(request, f'Event has been Added successfully!')
            return redirect('customadmin:enent')
        else:
            print('errr',form.errors)
            
            messages.error(request, f'{form.errors}')
    else:
        obj=None
        if id:
            obj = get_object_or_404(Event, id=id)
            form = EventForm(instance=obj)
        else:
            form = EventForm()
    
    return render(request, 'customadmin/event_add.html', {'form': form,'obj':obj})

def delete_event(request,id=None):
    if id:
        obj = get_object_or_404(Event, id=id)
        obj.delete()
        
        messages.success(request, f'Event has been removed successfully!')
        return redirect('customadmin:enent')
  
  
def gallery(request):
    gallery = Gallery.objects.all()
    return render(request,'customadmin/gallery.html',{'gallery':gallery})

def add_gallery(request,id=None):
    print('run')
    if request.method == "POST":
        print('post')
        print(request.POST)
        obj=None
        if id:
            obj = get_object_or_404(Gallery, id=id)
            print('data:',obj)
            form = GalleryForm(request.POST,request.FILES,instance=obj)
        else:
            form = GalleryForm(request.POST,request.FILES)
        if form.is_valid():
            images = request.FILES.getlist('image')
            videos = request.FILES.getlist('video')
            title = form.cleaned_data['title']
            description = form.cleaned_data['description']
            if images:
                for img in images:
                    Gallery.objects.create(title=title,description=description,image=img)
            if videos:
                for vid in videos:
                    Gallery.objects.create(title=title,description=description,video=vid)

            # form.save()
            
            messages.success(request, f'Gallery been updated successfully!')
            return redirect('customadmin:gallery')
        else:
            print('errr',form.errors)
            
            messages.error(request, f'{form.errors}')
    else:
        obj=None
        print(id)
        if id:
            obj = get_object_or_404(Gallery, id=id)
            print
            form = GalleryForm(instance=obj)
        else:
            form = GalleryForm()
    
    return render(request, 'customadmin/gallery_add.html', {'form': form,'obj':obj})

def delete_gallery(request,id=None):
    if id:
        obj = get_object_or_404(Gallery, id=id)
        obj.delete()
        
        messages.success(request, f'Gallery has been removed successfully!')
        return redirect('customadmin:gallery')
  
def contactus(request):
    contactus = Contactus.objects.all().order_by("-id")
    return render(request,'customadmin/contact.html',{'contactus':contactus})


def delete_contactus(request,id=None):
    if id:
        obj = get_object_or_404(Contactus, id=id)
        obj.delete()
        
        messages.success(request, f'Contact has been removed successfully!')
        return redirect('customadmin:contactus')
    
def view_contactus(request,id=None):
    # print('run')
    form=None
    # print(id)
    if id:
        obj = get_object_or_404(Contactus, id=id)
        form = ContactusForm(instance=obj)
    return render(request, 'customadmin/contact_view.html', {'form': form,'obj':obj})


def course(request):
    course = Course.objects.all()
    return render(request,'customadmin/course.html',{'course':course})

def add_course(request,id=None):
    print('run')
    if request.method == "POST":
        print('post')
        print(request.POST)
        obj=None
        if id:
            obj = get_object_or_404(Course, id=id)
            print('data:',obj)
            form = CourseForm(request.POST,request.FILES,instance=obj)
        else:
            form = CourseForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            
            messages.success(request, f'Course been updated successfully!')
            return redirect('customadmin:course')
        else:
            print('errr',form.errors)
            
            messages.error(request, f'{form.errors}')
    else:
        obj=None
        print(id)
        if id:
            obj = get_object_or_404(Course, id=id)
         
            form = CourseForm(instance=obj)
        else:
            form = CourseForm()
    
    return render(request, 'customadmin/course_add.html', {'form': form,'obj':obj})

def delete_course(request,id=None):
    if id:
        obj = get_object_or_404(Course, id=id)
        obj.delete()
        
        messages.success(request, f'Course has been removed successfully!')
        return redirect('customadmin:course')


def calendar_events(request):
    month = int(request.GET.get("month", 1))
    year = int(request.GET.get("year", 2025))
    
    events = Event.objects.filter(start_date__year=year, start_date__month=month).values('start_date','name','description')
    return JsonResponse(list(events), safe=False)




def notice(request):
    notice = Notice.objects.all()
    return render(request,'customadmin/notice.html',{'notice':notice})

def add_notice(request,id=None):
    print('run')
    if request.method == "POST":
        print('post')
        print(request.POST)
        obj=None
        if id:
            obj = get_object_or_404(Notice, id=id)
            print('data:',obj)
            form = NoticeForm(request.POST,request.FILES,instance=obj)
        else:
            form = NoticeForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            
            messages.success(request, f'notice been updated successfully!')
            return redirect('customadmin:notice')
        else:
            print('errr',form.errors)
            
            messages.error(request, f'{form.errors}')
    else:
        obj=None
        print(id)
        if id:
            obj = get_object_or_404(Notice, id=id)
         
            form = NoticeForm(instance=obj)
        else:
            form = NoticeForm()
    
    return render(request, 'customadmin/notice_add.html', {'form': form,'obj':obj})

def delete_notice(request,id=None):
    if id:
        obj = get_object_or_404(Notice, id=id)
        obj.delete()
        
        messages.success(request, f'Notice has been removed successfully!')
        return redirect('customadmin:notice')

