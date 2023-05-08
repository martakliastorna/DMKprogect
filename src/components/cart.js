import React from "react";
import Total from "./total";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Cart({products, removeProductFromCart, changeCount}) {
  return <div className="cart border-left">
    <h2><img className="img-shop mr-2" src="../images/shop.png" alt='cart'/>Кошик</h2>
    <ul className={'ul-cart'}> 
    {products?.map(product => <li className={"place-cart pb-4"} key={product.id}>{product.title}
    <div className={'ml-3 '}><div className={"mb-1"}><button className={'badge-style'}
            onClick={() =>(product.count <= 1) ? removeProductFromCart(product.id) : changeCount(product.id, product.count - 1)} >-</button>
      &nbsp;&nbsp;{product.count}&nbsp;&nbsp;
      <button className={'badge-style'}
            onClick={() => changeCount(product.id, product.count + 1)}>+</button>  
      </div>
      <Button className={'bg-dark text-white p-1'}
        onClick={() => removeProductFromCart(product.id)}>Видалити</Button>
    </div> </li>)}
  </ul> 
    <Total products={products} />
    <Link to='/delivery'> <Button variant={'dark'}>Оформити замовлення</Button> </Link>

    
  
  </div>
}

export default Cart;