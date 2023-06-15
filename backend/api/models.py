from django.db import models

class Note(models.Model):
    default_auto_field = 'django.db.models.BigAutoField'
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True) # auto_now for updated
    created = models.DateTimeField(auto_now_add=True) # auto_now_add for created

    def __str__(self):
        return self.body[0:50]
