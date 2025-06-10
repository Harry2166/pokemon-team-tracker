from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 
from .serializers import PokemonSerializer
from .models import Pokemon

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_pokemon(request):
    pokemon = Pokemon.objects.filter(user=request.user)
    serialized_pokemon = PokemonSerializer(pokemon, many=True)
    return Response(serialized_pokemon.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def insert_pokemon(request):
    request_data_copy = request.data.copy()
    request_data_copy['user'] = request.user

    serialized_pokemon = PokemonSerializer(data=request_data_copy)
    if serialized_pokemon.is_valid():
        serialized_pokemon.save()
        return Response(serialized_pokemon.data, status=status.HTTP_201_CREATED)
    return Response(serialized_pokemon.errors, status=status.HTTP_201_CREATED)
