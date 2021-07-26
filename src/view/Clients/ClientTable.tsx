import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const ClientTable = props => {
  const useStyles = makeStyles({
    table: {
      minWidth: 350,
      maxWidth: 500,
    },
  });
  
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {props.clients.length > 0 ? (
          props.clients.map(client => (
              <TableRow key={client.id}>
                <TableCell component="th" scope="row">
                  {client.name}
                </TableCell>
                <TableCell>{client.address}</TableCell>
                <TableCell>
                  <IconButton onClick={() => { props.editRow(client) }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { props.deleteClient(client.id) }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={3}>Sem clientes</TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table>
      </TableContainer>
  )}
  // <table>
  //   <thead>
  //     <tr>
  //       <th>Nome</th>
  //       <th>Endereço</th>
  //       <th>Ações</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.clients.length > 0 ? (
  //       props.clients.map(client => (
  //         <tr key={client.id}>
  //           <td>{client.name}</td>
  //           <td>{client.address}</td>
  //           <td>
  //             <button
  //               onClick={() => {
  //                 props.editRow(client)
  //               }}
  //               className="button muted-button"
  //             >
  //               Editar
  //             </button>
  //             <button
  //               onClick={() => props.deleteClient(client.id)}
  //               className="button muted-button"
  //             >
  //               Excluir
  //             </button>
  //           </td>
  //         </tr>
  //       ))
  //     ) : (
  //       <tr>
  //         <td colSpan={3}>Sem clientes</td>
  //       </tr>
  //     )}
  //   </tbody>
  // </table>
// )

export default ClientTable
