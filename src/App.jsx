import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProtectRoute from './components/ProtectRoute';
import Cart from './components/Cart';
import { UserProvider } from './components/usersContext';
import './App.css';

function App() {
  const isLoggedIn = localStorage.getItem("token") !== null;  

  return (
    <UserProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Navigate to="/Login" />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/Home" />} />
            )}
            <Route element={<ProtectRoute />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
