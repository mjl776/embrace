import React from 'react';
import './App.css';
import NavBar from './NavigationBar/NavBar'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
const App = () => {

return (
  <div className = "app">
    <NavBar></NavBar>
    <HomePage></HomePage>
    <Footer></Footer>
  </div> 
);

}

export default App;
