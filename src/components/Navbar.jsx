import React, { useEffect, useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const username = localStorage.getItem('user') ;    
    const [isLoggedIn , setIsloggedIn] = useState(false);

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

  return (
    <div className='navbar_container'>
        <div className='logo_navbar'>
            <h3 className='navbar_title'>MyShop</h3>
        </div>
        <div className='container_links'>
            <ul className='links_navbar'>
                {isLoggedIn && <li><NavLink to="/Home">Home</NavLink></li>}
                {!isLoggedIn && <li><NavLink to="/Login">Sign In</NavLink></li>}
                {isLoggedIn && <li><NavLink onClick={handleLogout} className="btn_logout">Log Out</NavLink></li>}
                {isLoggedIn && <li><NavLink to="/Cart">Cart</NavLink></li>}
            </ul>
            {isLoggedIn && <p>Welcom, {username}</p>}
        </div>
    </div>
  )
}

export default Navbar