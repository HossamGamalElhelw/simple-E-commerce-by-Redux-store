<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const username = JSON.parse(localStorage.getItem("user"))?.username;  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
    const handleDropList = () =>{
        setDropdownOpen((prev) => !prev);
    }
    const closeDropdown = () => {
        setDropdownOpen(false);
    };
    return (
        <div className="navbar_container">
            <div className="logo_navbar">
                <li><NavLink to="/Home">My Shop</NavLink></li>
            </div>
            
            <div className="container_links">
                <img onClick={handleDropList} className="list_icon" src = {!dropdownOpen ? 'list-solid.svg' : 'xmark-solid.svg'} alt="list" />
                <ul className={`links_navbar ${dropdownOpen ? "open" : ""}`}>
                    {isLoggedIn && <li><NavLink to="/Home" onClick={closeDropdown}>Home</NavLink></li>}
                    {!isLoggedIn && <li><NavLink to="/Login" onClick={closeDropdown}>Sign In</NavLink></li>}
                    {isLoggedIn && (
                        <li><NavLink onClick={() => {handleLogout() , closeDropdown()}} className="btn_logout">Log Out</NavLink></li>
                    )}
                    {isLoggedIn && <li><NavLink to="/Cart" onClick={closeDropdown}>Cart</NavLink></li>}
                    {isLoggedIn && <li>Welcome, {username}</li>}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
=======
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const username = localStorage.getItem('user') ;    
    const [isLoggedIn , setIsloggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () =>{
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
        setIsloggedIn(false);
        window.location.reload();
    }
    useEffect(() => {
        const loggedIn = JSON.parse(localStorage.getItem('loggedIn')) || false;
        setIsloggedIn(loggedIn)
    },[])

    const handleDropList = () =>{
        setDropdownOpen((prev) => !prev);
    }
    const closeDropdown = () => {
        setDropdownOpen(false);
    };

  return (

    <div className='navbar_container'>
        <div className='logo_navbar'>
            <h3 className='navbar_title'>MyShop</h3>
        </div>
        <div className='container_links'>
            <img onClick={handleDropList} className="list_icon" src = {!dropdownOpen ? 'list-solid.svg' : 'xmark-solid.svg'} alt="list" />
            <ul className={`links_navbar ${dropdownOpen ? "open" : ""}`}>
                {isLoggedIn && <li><NavLink to="/Home" onClick={closeDropdown}>Home</NavLink></li>}
                {!isLoggedIn && <li><NavLink to="/Login"> onClick={closeDropdown}Sign In</NavLink></li>}
                {isLoggedIn && <li><NavLink onClick={() => {handleLogout() , closeDropdown()}} className="btn_logout">Log Out</NavLink></li>}
                {isLoggedIn && <li><NavLink to="/Cart" onClick={closeDropdown}>Cart</NavLink></li>}
                {isLoggedIn && <li>Welcom, {username}</li>}
            </ul>
        </div>
    </div>
  )
}

<<<<<<< HEAD
export default Navbar;
>>>>>>> 3e87d670e673179a2e148069f1d0a1333356d35e
=======
export default Navbar
>>>>>>> 0d533e3 (first commit)
