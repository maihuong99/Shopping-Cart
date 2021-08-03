import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Modal from './components/Modal'
import data from './data/products.json'
import {useState, useEffect} from 'react'
import './components/style.css'


function App() {

  const [products, setProducts] = useState([]);
  const [items, setItems] =useState([]);

  async function getProduct(){
    setProducts(data.items);
    var item =localStorage.getItem('bakeCart');
    if(item !== null){
      setItems(JSON.parse(item));
    }
  }

  function addToCart(product){
    product.number = 1;
    var productsInCart = localStorage.getItem('bakeCart');

    if(productsInCart === null){
      productsInCart = [];
      productsInCart.push(product);
      localStorage.setItem('bakeCart', JSON.stringify(productsInCart));
      setItems(productsInCart);
    }else{
      var products = [];
      products = JSON.parse(productsInCart);
      products.push(product);
      localStorage.setItem('bakeCart', JSON.stringify(products));
      setItems(products);
    }

  }
  function minus(index){
    var item =localStorage.getItem('bakeCart');
    var items = JSON.parse(item);
    items[index].number -= 1;
    localStorage.setItem('bakeCart', JSON.stringify(items));
    setItems(items)
  }

  function add(index){
    var item =localStorage.getItem('bakeCart');
    var items = JSON.parse(item);
    items[index].number += 1;
    localStorage.setItem('bakeCart', JSON.stringify(items));
    setItems(items)
  }

  function showCart(){
    document.querySelector(".modal").style.display = "block";
  };

  function hideModal(){
    document.querySelector(".modal .modal-content .modal-header .close").onclick = function(){
      document.querySelector(".modal").style.display = "none";
    }
  }

  function clearProduct(){
    localStorage.clear();
    setItems([]);
    for(var i=0; i<products.length; i++){
      var target = document.querySelectorAll(".box-container .box")[i]
      var button = target.querySelector(".info .row .btn");
      button.innerHTML = "Add to Cart"
      button.disabled = false;
    }
  }

  function deleteProduct(index, id){
    var array = localStorage.getItem("bakeCart");
    array = JSON.parse(array);
    array.splice(index,1);
    localStorage.setItem('bakeCart', JSON.stringify(array));
    var item = localStorage.getItem('bakeCart');
    setItems(JSON.parse(item))
    console.log(item);
    console.log(id);
    for(var i=0; i<products.length; i++){
      if(products[i].id === id){
        var target = document.querySelectorAll(".box-container .box")[i]
        var button = target.querySelector(".info .row .btn");
        button.innerHTML = "Add to Cart"
        button.disabled = false;
        continue;
      }
      
    }
  }

  useEffect(function(){
    getProduct();
    
  },[products]);

  useEffect(function(){
    if(items === null){
      document.querySelector(".header nav .cart .quantity").innerHTML = 0;
    }else{
      var number = 0;
      for(let i=0; i<items.length; i++){
        number += items[i].number;
      }
      document.querySelector(".header nav .cart .quantity").innerHTML = number;
    }

    if(items!== null){
      for(let i=0; i<items.length; i++){
        for(let k= 0; k < products.length;k++){
          if(items[i].id === products[k].id){
            var target = document.querySelectorAll(".box-container .box")[products[k].id-1]
            var button = target.querySelector(".info .row .btn");
            button.innerHTML = "In Cart"
            button.disabled = true;
            break;
          }
        }
      }
    }

  },[items])

  


  return (
    <div className="App">
      <Header showCart ={showCart}/>
      <Body products ={products} onClick = {addToCart}/>
      <Modal hideModal={hideModal} items ={items} minus ={minus} add ={add} clear ={clearProduct} deleteProduct ={deleteProduct}/>
    </div>
  );
}

export default App;
