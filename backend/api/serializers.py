from rest_framework.serializers import ModelSerializer
from .models import Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note # serialize note
        fields = '__all__' #  serialize all fields 