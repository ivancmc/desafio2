import React, { useState, Fragment } from 'react';
import AddClientForm from './AddClientForm';
import EditClientForm from './EditClientForm';
import ClientTable from './ClientTable';

export default function Clients(props){
	// Data
	const clientsData = [
		{ id: 1, name: 'Ivan Cardoso', address: 'Salvador-BA' }
	]

	console.log(props)

	const initialFormState = { id: null, name: '', address: '' }

	// Setting state
	const [ clients, setClients ] = useState(clientsData)
	const [ currentClient, setCurrentClient ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addClient = client => {
		client.id = clients.length + 1
		setClients([ ...clients, client ])
	}

	const deleteClient = id => {
		setEditing(false)

		setClients(clients.filter(client => client.id !== id))
	}

	const updateClient = (id, updatedClient) => {
		setEditing(false)

		setClients(clients.map(client => (client.id === id ? updatedClient : client)))
	}

	const editRow = client => {
		setEditing(true)

		setCurrentClient({ id: client.id, name: client.name, address: client.address })
	}

	return (
		<div className="container">
			<h1>Cadastro de clientes</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Editar cliente</h2>
							<EditClientForm
								editing={editing}
								setEditing={setEditing}
								currentClient={currentClient}
								updateClient={updateClient}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Adicionar cliente</h2>
							<AddClientForm addClient={addClient} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Ver clientes</h2>
					<ClientTable clients={clients} editRow={editRow} deleteClient={deleteClient} />
				</div>
			</div>
		</div>
	)
}