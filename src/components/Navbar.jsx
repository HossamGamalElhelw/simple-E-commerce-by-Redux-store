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

export default Navbar