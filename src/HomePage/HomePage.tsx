import React from 'react';
import './HomePage.css'
import logo from '../Images/Logo/Logo.png'
import graphic from '../Images/Media/Embrace brace graphic.png'
import partners from '../Images/Partners/Partnership images.png';
import { Row, Col } from 'react-bootstrap'; 

const HomePage = () => {
    return (
        <div className = "container">
            <div className = "slogan-container"> 
                <div className = "homepage-logo">
                    <img src = {logo} alt = "Logo" >
                    </img>
                </div>
                <div className = "slogan">
                    A pattern design competition aiming to bring beauty to back 
                    <br/>
                    braces
                </div>
            </div>
            <img src = {graphic} className = "embrace-graphic"></img>
            <Row className = "info-blocks"> 
                <Col className = "info-embrace"> 
                    <h1 className = "header-embrace"> emBrace </h1>
                    <div className = "embrace-info-text">
                        A nationwide competition 
                        intended to encourage artists 
                        to design
                        <br/>
                        fashionable prints and 
                        patterns for scoliosis braces that 
                        appeal to 
                        <br/>
                        everyone. emBrace honors 
                        aesthetically powerful graphic designs by 
                        <br/>
                        artists across the country and partners 
                        with orthopedic companies to 
                        <br/>
                        transfer 
                        them onto the surface of back braces. 
                        This year, emBrace is 
                        <br/>
                        working with 
                        Friddles Orthopedic Company to 
                        launch the winning
                        <br/>
                        designs in their new brace collection.
                    </div>
                    <Row align = "center" className = "embrace-button-row">
                        <Col><div className="embrace-button"> Prizes </div></Col>
                        <Col><div className="embrace-button"> Results </div></Col>
                        <Col><div className="embrace-button"> Jury </div></Col>
                    </Row>
                </Col>
                <Col className = "info-dates"> 
                    <h1 className = "header-info"> Important Dates </h1>
                    <div className = "date-info">
                        <div className ="date-container">
                            <div className = "individual-date">
                                <span className = "date-text"> April 13th: </span>
                                <span className = "title-of-date "> First Round of Judging  </span>
                            </div>
                            <div className = "individual-date">
                                <span className = "date-text"> April 16th: </span>
                                <span className = "title-of-date "> Final Round of Judging  </span>
                            </div>
                            <div className = "individual-date">
                                <span className = "date-text"> April 19th: </span>
                                <span className = "title-of-date "> Winners will 
                                be 
                                posted 
                                <br/>
                                on
                                the website 
                                and notified directly  </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="partnerships">
                <h1 className = "partnerships-header"> Our Partnerships </h1>
                <img src = {partners} alt = "Partnernships Images" className="partnerships-graphic"></img>
            </div>
        </div>
    ); 
}

export default HomePage;