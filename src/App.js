import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import data from './data/products.json'
import {useState, useEffect} from 'react'
import './components/style.css'
// import image from './images/product-1.jpg'

function App() {

  const [products, setProducts] = useState([]);
  function getProduct(){
    setProducts(data.items);
  }

  useEffect(function(){
    getProduct();
    console.log(products);
  },[products])
  return (
    <div className="App">
      <Header />
      <Body products ={products}/>
    </div>
  );
}

export default App;
