import React, { useState, useEffect } from 'react'

const EditClientForm = props => {
  const [ client, setClient ] = useState(props.currentClient)

  useEffect(
    () => {
      setClient(props.currentClient)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setClient({ ...client, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateClient(client.id, client)
      }}
    >
      <label>Nome</label>
      <input type="text" name="name" value={client.name} onChange={handleInputChange} />
      <label>Endereço</label>
      <input type="text" name="address" value={client.address} onChange={handleInputChange} />
      <button>Atualizar</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default EditClientForm
