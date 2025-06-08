from django.db import models

# SELECT setval(pg_get_serial_sequence('"pokemon_pokemon"', 'id'), MAX(id)) FROM pokemon_pokemon;
class Pokemon(models.Model):
    species_name = models.CharField(default="", max_length=255)
    pokeapi_id = models.IntegerField(default=0)
    nickname = models.CharField(max_length=255)
    gender = models.BooleanField() # true = male, false = female
    image_url = models.URLField()
    captured_at = models.DateTimeField(auto_now_add=True)
    shiny = models.BooleanField(default=False) # true = shiny, false = not shiny

