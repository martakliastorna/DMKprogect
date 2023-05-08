import React, {useEffect, useState} from "react";
import '../css/products.css';
import Product from "../components/product";
import Cart from "../components/cart";
import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
      .then(data => setCategories(data));
  }, []);

useEffect(() => {
  fetch(  'https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data.map(product => {
          return {...product, addedToCart: false, count: 1};
        })));   
  }, []);
  


function changeCount(id, newCount) {
    const result = products.map(product => ({...product, count: product.id === id ? newCount : product.count}));
    setProducts(result);
  }

  function addProductToCart(id) {
    const result = [];
    for(let product of products) {
      if(product.id === id) {
        result.push({...product, addedToCart: true});
      } else {
        result.push(product);
      }
    }
  setProducts(result);
  }

  function removeProductFromCart(id) {
    const result = products.map(product => ({...product, addedToCart: product.id === id ? false : product.addedToCart}))
    
    setProducts(result);
  }
  
  function searchByProductName(value) {
  setSearchValue(value);
  const result = products.filter(product => product.title.toLowerCase().includes(value) || product.category.toLowerCase() === (value));
    setFilteredProducts(result);
  }

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter
      setCurrentCategory(currentCategory);
  })
})

  return <div className="shop-products">
    <Header />
    <div className={'container mb-5 mt-5'}>
      <Search searchByProductName={searchByProductName} />
      <div>
        <button
          onClick={ () => searchByProductName('')}
          className={' btn btn-light mr-3'}>Всі товари</button>
        {categories ? categories.map(el => <button
      onClick={ () => searchByProductName(currentCategory)}
          key={el} data-filter={el} className={' btn btn-light mr-3'}>{el} </button>) : ''}
    </div></div>
    <div className={'container-shop border-top border-bottom'}>
      <div className={' row p-5'}>
    {(searchValue.length ? filteredProducts : products).map(product => <Product
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      product={product}
      key={product.id} />)}
    </div>
      <div>
        <Cart products={products.filter(product => product.addedToCart)}
    removeProductFromCart={removeProductFromCart}
    changeCount={changeCount}
    /></div></div>
  <Footer/>
  </div>
}

export default Products;