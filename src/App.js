import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home";
import Product from './Components/Product/Product';
const App=()=> {
  return (
    <div className="App">
       <Header></Header>
       <Home></Home>
       <div className="Product1">
       <Product>
        
       </Product>
       
       </div>
    </div>
  );
}

export default App
