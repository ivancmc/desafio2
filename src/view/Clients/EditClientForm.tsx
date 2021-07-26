import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
		root: {
			margin: theme.spacing(1),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		textField: {
		  marginLeft: theme.spacing(1),
		  marginRight: theme.spacing(1),
		  width: '50ch',
		  marginBottom: '1ch',
		},
		}),
	);
	const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on"
      onSubmit={event => {
        event.preventDefault()

        props.updateClient(client.id, client)
      }}
    >
      
			<TextField
			name="name"
			variant="outlined"
			required
			fullWidth
			margin="dense"
			className={classes.textField}
			id="name"
			label="Nome"
			autoFocus
			value={client.name}
			onChange={handleInputChange}
			/>
			<TextField
			name="address"
			variant="outlined"
			required
			margin="dense"
			fullWidth
			className={classes.textField}
			id="address"
			label="Endereço"
			autoFocus
			value={client.address}
			onChange={handleInputChange}
			/>
			<Button variant="outlined" color="primary" onClick={event => {
        event.preventDefault()

        props.updateClient(client.id, client)
      }}>
				Atualizar
			</Button>
			<Button variant="outlined" onClick={() => props.setEditing(false)}>
				Cancelar
			</Button>
    </form>
  )
}

export default EditClientForm
