import React from 'react';
import './HomePage.css'
import logo from '../Images/Logo/Logo.png'

const HomePage = () => {
    return (
        <div className = "container"> 
                <div className = "homepage-logo">
                    <img src = {logo} alt = "Logo" >
                    </img>
                </div>
            <div className = "slogan-container">
                <div className = "slogan">
                    A pattern design competition aiming to bring beauty to back 
                    <br/>
                    braces
                </div>
            </div>
        </div>
    ); 
}

export default HomePage;