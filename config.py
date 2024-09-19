from database.database import db
from database.models.pacientes import Paciente

from routes.home import home_route
from routes.pacientes import pacientes_routes

def config_all(app):
    
    config_routes(app)
    config_db()

def config_routes(app):
    
    app.register_blueprint(home_route)
    app.register_blueprint(pacientes_routes, url_prefix="/pacientes")

def config_db():
    
    db.connect()
    db.create_tables([Paciente])
    