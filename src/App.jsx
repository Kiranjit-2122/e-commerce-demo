// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './pages/Home'

// function App() {

//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import ProductList from './components/ProductList.jsx';
import { CartContext } from './context/CartContext.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
      <div className="app">
        <h1>Simple Cart App</h1>
        <nav>
          <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
        </nav>
            </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/about' element={<About/>} />
          <Route path='/productlist' element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
};
export default App;
