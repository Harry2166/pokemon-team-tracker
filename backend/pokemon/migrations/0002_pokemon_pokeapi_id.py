# Generated by Django 5.2.2 on 2025-06-07 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pokemon',
            name='pokeapi_id',
            field=models.IntegerField(default=0),
        ),
    ]
