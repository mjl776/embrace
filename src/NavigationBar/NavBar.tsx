import React, { useState, useEffect } from 'react'
import './NavBar.css';
import logo from '../Images/Logo/Logo.png'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
     // Screen width setter
     const [screenWidth, setScreenWidth] = useState(window.innerWidth)

     // Open State Setter
     const [open, setOpen] = useState(false);
 
     //Screen Width Listener
     useEffect(() => {
 
         const changeWidth = () => {
             setScreenWidth(window.innerWidth);
         }
 
         window.addEventListener('resize', changeWidth)
 
         return () => {
             window.removeEventListener('resize', changeWidth)
         }
 
     }, [])
 
    return ( 
        <div className = "container">
            <header>
                <nav className = "navbar">
                    <a href = "/">
                        <img src = {logo} className = "logo" alt = "logo"></img>
                    </a>    
                    {(screenWidth > 800) && (
                        <ul className = "nav-menu">
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                Competition Results
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                emBrace Competition
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                Q&A Session
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/"
                                className = "nav-link"
                                >
                                Partnerships
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
        </div>
    ); 
}

export default NavBar