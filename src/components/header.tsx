import React from 'react';
import { Container } from './../view/Home/style';

import { IProduct } from '../view/Home'

import Logo from '../assets/logo.png'
import Loja from '../assets/nome_loja.png'
import Cart from '../assets/cart.png'

interface HomeProps{
  cart: Array<IProduct>;
}

const Header: React.FC<HomeProps> = (props): JSX.Element => {
  return (
    <Container>
      <div className="nav">
        <div id="logo">
          <img src={Logo} alt="Logo" width="80px" height="auto" />
          <img src={Loja} alt="Cada canto" width="auto" height="75px" />
          {/* <Link to='/clients' params={{ cart: props.cart.length }}>Clientes</Link> */}
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="80px" height="auto" />
          <span>{props.cart.length}</span>
        </div>
      </div>
    </Container>
  );
}

export default Header;