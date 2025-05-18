import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectRoute() {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/Login" replace />;
}

export default ProtectRoute;