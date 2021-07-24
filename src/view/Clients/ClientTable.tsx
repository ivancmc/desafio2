import React from 'react'

const ClientTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.clients.length > 0 ? (
        props.clients.map(client => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.address}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(client)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteClient(client.id)}
                className="button muted-button"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem clientes</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ClientTable
