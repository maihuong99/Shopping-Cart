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
  function getProduct(){
    setProducts(data.items);
    var item =localStorage.getItem('cart');
    if(item !== null){
      setItems(JSON.parse(item));
    }
  }

  function addToCart(product){
    product.number = 1;
    var productsInCart = localStorage.getItem('cart');

    if(productsInCart === null){
      productsInCart = [];
      productsInCart.push(product);
      localStorage.setItem('cart', JSON.stringify(productsInCart));
      setItems(productsInCart);
    }else{
      var products = [];
      products = JSON.parse(productsInCart);
      products.push(product);
      localStorage.setItem('cart', JSON.stringify(products));
      setItems(products);
    }

  }
  function minus(index){
    var item =localStorage.getItem('cart');
    var items = JSON.parse(item);
    items[index].number -= 1;
    localStorage.setItem('cart', JSON.stringify(items));
    setItems(items)
  }

  function add(index){
    var item =localStorage.getItem('cart');
    var items = JSON.parse(item);
    items[index].number += 1;
    localStorage.setItem('cart', JSON.stringify(items));
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
  }

  useEffect(function(){
    getProduct();
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
    
  },[products,items]);


  return (
    <div className="App">
      <Header showCart ={showCart}/>
      <Body products ={products} onClick = {addToCart}/>
      <Modal hideModal={hideModal} items ={items} minus ={minus} add ={add} clear ={clearProduct}/>
    </div>
  );
}

export default App;
