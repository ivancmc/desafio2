import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';

export default function FormDialogProduct(props:any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
      fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    }),
  );

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialFormState = { id: null, photo: '', name: '', description: '', price: '' }
	const [ product, setProduct ] = useState(initialFormState)

	function handleInputChange(event: { target: { name: string; value: string; }; }): void {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  }
  
  return (
    <div className={classes.root}>
      <Tooltip title="Adicionar produto" aria-label="add">
        <Fab color="secondary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Inserir produto</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={event => {
            event.preventDefault()
            if (!product.photo || !product.name || !product.price) return
            props.addProduct(product)
            setProduct(initialFormState)
            handleClose()
          }}>
            <TextField
              name="photo"
              variant="outlined"
              required
              fullWidth
              id="photo"
              label="Imagem (url)"
              autoFocus
              value={product.photo}
              onChange={handleInputChange}
            />
            <TextField
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Nome"
              autoFocus
              value={product.name}
              onChange={handleInputChange}
            />
            <TextField
              name="description"
              variant="outlined"
              fullWidth
              id="description"
              label="Descrição"
              autoFocus
              value={product.description}
              onChange={handleInputChange}
            />
            <TextField
              name="price"
              variant="outlined"
              required
              fullWidth
              id="price"
              label="Preço"
              type="number"
              autoFocus
              value={product.price}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    R$
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={event => {
            event.preventDefault()
            if (!product.photo || !product.name || !product.price) return
            props.addProduct(product)
            setProduct(initialFormState)
            handleClose()
          }} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
