import React, { useState, useEffect } from 'react';

// import { Container } from './style';

import { store } from '../../store.js';

import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import FloatingAddProductButton from '../../components/formDialogProduct';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export interface IProduct{
  id: number;
  photo: string;
  name: string;
  description?: string;
  price: number;
}

const Home: React.FC = () => {
  const [ products, setProducts ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
  
  useEffect(() =>{
    if (localStorage.getItem('store') === null){
      setProducts(store)
      localStorage.setItem('store', JSON.stringify(store))
    } else {
      setProducts(JSON.parse(localStorage.getItem('store') || '[]'))
    }
  },[])

  const handleCart = (index: number) => {
    setCart([ ...cart, products[index] ])
    localStorage.setItem('cart', JSON.stringify([ ...cart, products[index] ]))
  }

  const addProduct: any = (product: IProduct) => {
    product.id = products.length + 1
    setProducts([...products, product])
    localStorage.setItem('store', JSON.stringify([ ...products, product ]))
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }),
  );

  const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }),
  )(Badge);

  const classes = useStyles();

  return(
    <>      
      <div className={classes.root}>
        <div className="cartIcon">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
        <Grid container spacing={2}>
          { products.map( (prod, index) => (
            <Grid item xs={2} key={prod.id}>
              <Paper className={classes.paper}>
                <img src={prod.photo} alt="Imagem do produto" width="150" height="auto" />
                <Typography variant="h6" gutterBottom>
                  {prod.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {prod.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  R$ {prod.price}
                </Typography>
                <IconButton color="primary" aria-label="add to shopping cart" onClick={ () => handleCart(index)}>
                  <AddShoppingCartIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <FloatingAddProductButton addProduct={addProduct} />
    </>
  );
}

export default Home;