import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectRoute() {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn')) || false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/Login" />;
}

export default ProtectRoute;