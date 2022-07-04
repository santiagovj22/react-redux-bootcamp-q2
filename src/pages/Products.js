import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/products/ProductCard'
import { Container } from '../styles/pages/Products.styles';
export const Products = () => {

  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const result = await (await fetch('data/products.json')).json();
      setData(result.data?.products?.items || []);
    } catch (error) {
      throw error;
    }
  };
  const handleCart = (product) => {
    alert(' Nothing to do here yet');
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <Container>
     {
        data.length > 0 && data.map((product) => {
          return <ProductCard 
                    key={product.id} 
                    product={product} 
                    handleCart={handleCart}/>   
        })
     }
    </Container>
    </>
  )
}
