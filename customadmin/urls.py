from django.urls import path
from . import views
urlpatterns = [
    path('',views.index,name='home'),
    path('event/', views.event, name='enent'),
    path('add-event/', views.add_event, name='add_event'),
    path('update-event/<int:id>/', views.add_event, name='update_event'),
    path('delete-event/<int:id>/', views.delete_event, name='delete_event'),
    path('gallery/', views.gallery, name='gallery'),
    path('add-gallery/', views.add_gallery, name='add_gallery'),
    path('update-gallery/<int:id>/', views.add_gallery, name='update_gallery'),
    path('delete-gallery/<int:id>/', views.delete_gallery, name='delete_gallery'),
    path('course/', views.course, name='course'),
    path('add-course/', views.add_course, name='add_course'),
    path('update-course/<int:id>/', views.add_course, name='update_course'),
    path('delete-course/<int:id>/', views.delete_course, name='delete_course'),
    path('contactus/', views.contactus, name='contactus'),
    path('view-contactus/<int:id>/', views.view_contactus, name='view_contactus'),
    path('delete-contactus/<int:id>/', views.delete_contactus, name='delete_contactus'),
]