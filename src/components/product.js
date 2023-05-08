import React from "react";
import {Button } from "react-bootstrap";
import {NavLink} from "react-router-dom";


function Product({product, addProductToCart, removeProductFromCart}) {
  return <div className={'col-sm-12 col-md-6 col-lg-4 col-xl-3'}>
    <div className="product">
      <div className={'text-center'}>
      <img src={product.image} alt='product'/>
    </div>
    <h4 className={'mt-3'}><NavLink className="color-black" to={`/shop/${product.id}`}>{product.title}</NavLink></h4>
    <p className="mt-3 mb-3 color font-bold">{product.price} ₴</p>
    { product.addedToCart ?
        <Button variant={'danger'} onClick={() => removeProductFromCart(product.id)}>Видалити з кошика</Button> :
        <Button variant={'dark'} onClick={() => addProductToCart(product.id)}>Додати в кошик</Button>}
</div>
  </div>
}

export default Product;