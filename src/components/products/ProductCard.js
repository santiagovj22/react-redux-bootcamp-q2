import React from "react";
import {
  Card,
  Image,
  Button,
  Details,
  ProductName,
  ProductCategory,
  ProductPrice,
} from "../../styles/components/products/ProductCard.styles";

export const ProductCard = ({product, handleCart}) => {

    return (
        <Card>
        <Image src={product.images[0]} alt={product.name}/>
        <Details>
          <ProductName>{product.name}</ProductName>
          <ProductCategory>{product.categories[0]}</ProductCategory>
          <ProductPrice>${product.price}</ProductPrice>
          <Button onClick={handleCart}>Add to cart</Button>
        </Details>
      </Card>
    );
  };