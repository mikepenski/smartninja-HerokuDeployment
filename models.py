import os
from sqla_wrapper import SQLAlchemy

db = SQLAlchemy(os.getenv("DATABASE_URL", "sqlite:///localhost.sqlite"))  # this connects to a database either on Heroku or on localhost

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    betreff = db.Column(db.String, unique=True)
    name = db.Column(db.String, unique=False)
    email = db.Column(db.String, unique=True)
    message = db.Column(db.String, unique=False)
    datenschutz = db.Column(db.String, unique=False)

