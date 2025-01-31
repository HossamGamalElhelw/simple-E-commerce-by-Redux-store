import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const username = JSON.parse(localStorage.getItem("user"))?.username;  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);   // Set true if token exists
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false); 
        window.location.reload()
    };


    return (
        <div className="navbar_container">
            <div className="logo_navbar">
                <h3 className="navbar_title">MyShop</h3>
            </div>
            <div className="container_links">
                <ul className="links_navbar">
                    {isLoggedIn && <li><NavLink to="/Home">Home</NavLink></li>}
                    {!isLoggedIn && <li><NavLink to="/Login">Sign In</NavLink></li>}
                    {isLoggedIn && (
                        <li><NavLink onClick={handleLogout} className="btn_logout">Log Out</NavLink></li>
                    )}
                    {isLoggedIn && <li><NavLink to="/Cart">Cart</NavLink></li>}
                </ul>
                {isLoggedIn && <p>Welcome, {username}</p>}
            </div>
        </div>
    );
}

export default Navbar;
