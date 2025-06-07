from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PokemonSerializer
from .models import Pokemon

@api_view(['GET'])
def get_all_pokemon(request):
    pokemon = Pokemon.objects.all()
    serialized_pokemon = PokemonSerializer(pokemon, many=True)
    return Response(serialized_pokemon.data)

@api_view(['POST'])
def insert_pokemon(request):
    serialized_pokemon = PokemonSerializer(data=request.data)
    if serialized_pokemon.is_valid():
        serialized_pokemon.save()
        return Response(serialized_pokemon.data, status=status.HTTP_201_CREATED)
    return Response(serialized_pokemon.errors, status=status.HTTP_201_CREATED)
