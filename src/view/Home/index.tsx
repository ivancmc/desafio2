import React, { useState, useEffect } from 'react';

import Logo from '../../assets/logo.png'
import Loja from '../../assets/nome_loja.png'
import Cart from '../../assets/cart.png'

import { Container } from './style';

import { store } from '../../store.js';

interface IProduct{
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
    } else {
      setProducts(JSON.parse(localStorage.getItem('store') || '[]'))
    }
  },[])

  const handleCart = (index: number) => {
    setCart([ ...cart, products[index] ])
    setProducts([ ...products, products[index] ])
    localStorage.setItem('cart', JSON.stringify([ ...cart, products[index] ]))
    localStorage.setItem('store', JSON.stringify([ ...products, products[index] ]))
  }

  return(
    <Container>
      <div className="nav">
        <div id="logo">
          <img src={Logo} alt="Logo" width="80px" height="auto" />
          <img src={Loja} alt="Cada canto" width="auto" height="75px" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="80px" height="auto" />
          <span>{cart.length}</span>
        </div>
      </div>
      <section>
        { products.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;