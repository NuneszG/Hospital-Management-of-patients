from flask import Blueprint, render_template, request
from database.models.pacientes import Paciente

pacientes_routes = Blueprint('pacientes', __name__)

@pacientes_routes.route('/')
def lista_pacientes():

    pacientes = Paciente.select()

    return render_template('lista.html', pacientes = pacientes)

@pacientes_routes.route('/new')
def formulario():

    return render_template('form.html')

@pacientes_routes.route('/', methods=['POST'])
def inserir_pacientes():

    data = request.json

    pacientes = Paciente.create(
        name = data['name'],
        email = data['email'],
        cidade = data['cidade'],
        problem = data['problem'],
    )

    return render_template('pacientes.html', pacientes = pacientes)

@pacientes_routes.route('/<int:pacientes_id>')
def obter_pacientes(pacientes_id):

    pacientes = Paciente.get_by_id(pacientes_id)
    
    dados = [
        {
            pacientes.name,
            pacientes.problem,
            pacientes.email,
            pacientes.cidade
        }
    ]

    print(dados)

    return {"Dados do paciente": 'Foram exibidos no terminal.'}

@pacientes_routes.route('/<int:pacientes_id>/edit')
def editar_paciente(pacientes_id):

    pacientes = Paciente.get_by_id(pacientes_id)

    return render_template('form.html', pacientes = pacientes)

@pacientes_routes.route('/<int:pacientes_id>/update', methods=['PUT'])
def atualizar_pacientes(pacientes_id):

    data = request.json

    pacientes = Paciente.get_by_id(pacientes_id)
    pacientes.name = data['name']
    pacientes.email = data['email']
    pacientes.cidade = data['cidade']
    pacientes.problem = data['problem']
    pacientes.save()

    dados = {
        "id": pacientes_id,
        "name": pacientes.name,
        "email": pacientes.email,
        "cidade": pacientes.cidade,
        "problema": pacientes.problem
    }

    print("Dados do paciente foram atualizados: ", dados)

    return render_template('pacientes.html', pacientes = pacientes)

@pacientes_routes.route('/<int:pacientes_id>/delete', methods=['DELETE'])
def deletar_pacientes(pacientes_id):

    pacientes = Paciente.get_by_id(pacientes_id)
    pacientes.delete_instance()

    return {"Data pacient": 'Deleted'}