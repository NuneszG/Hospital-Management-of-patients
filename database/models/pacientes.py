from peewee import Model, CharField, TextField
from database.database import db

class Paciente(Model):
    name = CharField()
    email = CharField()
    problem = TextField()

    class Meta:
        database = db