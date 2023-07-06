import React from 'react';
import "./Categories.css";

const Catergories = () => {
    return (
        <div className = "categories-container">
            <header>
                Categories
            </header>
            <div className ="category-flexbox">
                <div className = "category">
                    Junior: <span> 16-19 years old </span>
                </div>
                <div className = "category">
                    Adult: <span> 20+ years old </span>
                </div>
            </div>
        </div>
    );
}

export default Catergories;