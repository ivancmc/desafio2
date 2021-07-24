import React, { useState } from 'react'

const AddClientForm = props => {
	const initialFormState = { id: null, name: '', address: '' }
	const [ client, setClient ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setClient({ ...client, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!client.name || !client.address) return

				props.addClient(client)
				setClient(initialFormState)
			}}
		>
			<label>Nome</label>
			<input type="text" name="name" value={client.name} onChange={handleInputChange} />
			<label>Endereço</label>
			<input type="text" name="address" value={client.address} onChange={handleInputChange} />
			<button>Adicionar</button>
		</form>
	)
}

export default AddClientForm
