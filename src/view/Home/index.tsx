import React, { useState, useEffect } from 'react';

import { Container } from './style';

import { store } from '../../store.js';

import FloatingAddProductButton from '../../components/formDialogProduct';
import Header from '../../components/header';

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

  return(
    <>
      <Header cart={cart} />
      <Container>
        <section>
          { products.map( (prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.photo} alt="Imagem do produto" width="200" height="auto" />
              <h4>{prod.name}</h4>
              <span>{prod.description}</span>
              <h6>{prod.price}</h6>
              <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
            </div>
          ))}
        </section>
      </Container>
      <FloatingAddProductButton addProduct={addProduct} />
    </>
  );
}

export default Home;