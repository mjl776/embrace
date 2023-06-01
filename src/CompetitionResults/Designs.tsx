import React from 'react';
import "./Designs.css";
import { Row, Col } from 'react-bootstrap'; 
import  platinum  from '../Images/Awards/Platinum-Molly.png';
import embrace from '../Images/Awards/emBrace-Madison.png'
import goldImani from '../Images/Awards/Gold-Imani.png'
import goldKelley from '../Images/Awards/Gold-Kelley.png'
import silverZoe from '../Images/Awards/Silver-Zoe.png'
import silverGia from '../Images/Awards/Silver-Gia.png'
import silverKsenia from '../Images/Awards/Silver-Kseniia.png'
import silverMegan from '../Images/Awards/Silver-Megan.png'
import bronzeLivia from '../Images/Awards/Bronze-Livia.png'
import bronzeKylie from '../Images/Awards/Bronze-Kylie.png'
import bronzeMegan from '../Images/Awards/Bronze-Megan.png'
import bronzeDaria from '../Images/Awards/Bronze-Daria.png'
import bronzeJulie from '../Images/Awards/Bronze-Julie.png'
import bronzeSarah from '../Images/Awards/Bronze-Sarah.png'
import bronzeMorgan from '../Images/Awards/Bronze-Morgan.png'
import bronzeRebecca from '../Images/Awards/Bronze-Rebecca.png'

const Designs = () => {
    return (
        <div className = "designs-container">
            <header className = "designs-header">
                emBrace Designs 2022
            </header>
            <div className = "designs-description">
                Thank you to everyone for entering 
                the emBrace 2022 Design Competition. 
                We received over 700 
                <br/>
                entries 
                for the competition! 
                Below are the winning designs that will be included in 
                the upcoming 
                <br/>
                brace collection with Friddles, 
                an orthopedic company. 
                In addition, several artists 
                will receive
                <br/>
                cash prizes. Congratulations to all the winners!
            </div>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {platinum} alt = "Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Platinum Award </div>
                        <div className = "award-recipient-platinum"> Molly Broekman </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {embrace} alt = "Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> emBrace Award </div>
                        <div className = "award-recipient"> Madison MacLean </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {goldImani} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Gold Award </div>
                        <div className = "award-recipient"> Ducks - Imani Wilborne </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {goldKelley} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Gold Award </div>
                        <div className = "award-recipient"> Kelley Jakelis </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {silverZoe} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Silver Award </div>
                        <div className = "award-recipient"> Zoe Perez </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {silverGia} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Silver Award </div>
                        <div className = "award-recipient"> Gia Yun </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {silverKsenia} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Silver Award </div>
                        <div className = "award-recipient"> Kseniia Puzrova </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {silverMegan} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Silver Award </div>
                        <div className = "award-recipient"> Megan Winter </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {bronzeLivia} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Frog and Shroom - Livia Tseng </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {bronzeKylie} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Kylie Prosch </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {bronzeMegan} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Megan Winter </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {bronzeDaria} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Daria Irincheeva </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {bronzeJulie} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Abstract Leaves - Julie Kitzes </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {bronzeSarah} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Sarah Hussein </div>
                    </div>
                </Col>
            </Row>
            <Row className = "awards-container">
                <Col className = "award">
                    <img className = "award-img" src = {bronzeMorgan} alt = "Gold Award Design for Embrace, Imani Wilborne"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Morgan Darby </div>
                    </div>
                </Col>
                <Col className = "award">
                    <img className = "award-img" src = {bronzeRebecca} alt = "Gold Award for Embrace"/>
                    <div className = "award-description">
                        <div className = "award-header"> Bronze Award </div>
                        <div className = "award-recipient"> Rebecca Thompson </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Designs; 