import React, { useState,  } from 'react';
import AddClientForm from './AddClientForm';
import EditClientForm from './EditClientForm';
import ClientTable from './ClientTable';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Clients(props){
	const clientsData = [
		{ id: 1, name: 'Ivan Cardoso', address: 'Salvador-BA' }
	]

	console.log(props)

	const initialFormState = { id: null, name: '', address: '' }

	const [ clients, setClients ] = useState(clientsData)
	const [ currentClient, setCurrentClient ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

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

	const useStyles = makeStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
		},
	});

	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				{editing ? (
					<>
						<Typography variant="h4" gutterBottom>
						Atualizar cliente
						</Typography>
						<EditClientForm
							editing={editing}
							setEditing={setEditing}
							currentClient={currentClient}
							updateClient={updateClient}
						/>
					</>
				) : (
					<>
						<Typography variant="h4" gutterBottom>
						Adicionar cliente
						</Typography>
						<AddClientForm addClient={addClient} />
					</>
				)}
			</div>
			<br/>
			<div className={classes.root}>
				<Typography variant="h4" gutterBottom>
						Clientes
				</Typography>
				<ClientTable clients={clients} editRow={editRow} deleteClient={deleteClient} />
			</div>
		</>
	)
}