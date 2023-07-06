import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavigationBar/NavBar";
import HomePage from "./HomePage/HomePage";
import Designs from "./CompetitionResults/Designs";
import HowToEnter from "./emBraceCompetition/HowToEnter/HowToEnter";
import Awards from "./Awards/Awards";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer/Footer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className = "main-container">
          <div className = "main-content">
            <Router>
              <NavBar/>
              <Routes>
                  <Route path="/" element={<HomePage/>}></Route>
                  <Route path="/designs" element={<Designs/>}></Route>
                  <Route path="/how-to-enter" element = {<HowToEnter/>}></Route>
                  <Route path="/awards" element = {<Awards/>}></Route>
              </Routes>
            </Router>
          </div>
        </div>
        <Footer/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
