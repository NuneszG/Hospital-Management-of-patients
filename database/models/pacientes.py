from peewee import Model, CharField, TextField, FloatField
from database.database import db

class Paciente(Model):
    name = CharField()
    email = CharField()
    tel = FloatField()
    cidade = TextField()
    problem = TextField()

    class Meta:
        database = db
        