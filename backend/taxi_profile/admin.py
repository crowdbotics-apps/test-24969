from django.contrib import admin
from .models import Document, UserProfile, DriverProfile, InviteCode, Notification

admin.site.register(InviteCode)
admin.site.register(DriverProfile)
admin.site.register(Notification)
admin.site.register(UserProfile)
admin.site.register(Document)

# Register your models here.
