from django.db import models

class Pokemon(models.Model):
    pokeapi_id = models.IntegerField(default=0)
    nickname = models.CharField(max_length=255)
    gender = models.BooleanField() # true = male, false = female
    image_url = models.URLField()
    captured_at = models.DateTimeField(auto_now_add=True)

