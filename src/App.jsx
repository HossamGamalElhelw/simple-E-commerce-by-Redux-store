import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProtectRoute from './components/protectRoute';

import './App.css';
import Cart from './components/cart';

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn')) || false;
  console.log("User is logged in:", isLoggedIn);

  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>          
          {!isLoggedIn ? (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<Login />} />
            </>
          ) :
            <Route path='/' element = {<Navigator to="/Home"/>} />
        } 
            <Route element={<ProtectRoute />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
