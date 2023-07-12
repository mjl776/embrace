import React from "react";
import "./Partnerships.css";
import { Row, Col } from "react-bootstrap";
import cg from "../Images/Partnerships/CG.png";
import friddles from "../Images/Partnerships/Friddles.png";
import scolio from "../Images/Partnerships/Scolios-us.png";
import ssl from "../Images/Partnerships/SSL.png";
import ss from "../Images/Partnerships/SS.png";
import { NavLink } from "react-router-dom";


const Partnerships = () => {
    return (
        <div className = "partnerships-container">
            <header>
                Our Partnerships
            </header>
            <div className ="partnerships-wrapper partnerships-flexbox">
                <p>
                    Curvy Girls is an international network of scoliosis support groups for teens run by teen girls.
                    This year emBrace is working with Curvy Girls in order to
                    gain a better insight into what improvements need to be made for scoliosis back brace patterns
                </p>
                <img src = {cg} alt = "curvy girls"/>
            </div>
            <Row className = "partnership-button-row">
                <Col className = "partnership-button">
                   <a href = "https://www.curvygirlsscoliosis.com">Visit Curvy Girls </a>
                </Col>
            </Row>
            <div className ="partnerships-wrapper partnerships-flexbox">
                <p>
                Friddles manufactures and distributes orthotic and prosthetic supplies at competitive prices.
                Winning designs from the
                emBrace competition will be launched in the upcoming Friddles back brace design collection
                </p>
                <img src = {friddles} alt = "curvy girls"/>
            </div>
            <Row className = "partnership-button-row">
                <Col className = "partnership-button">
                <a href = "https://friddles.com">Visit Friddles </a>
                </Col>
            </Row>
            <div className ="partnerships-wrapper partnerships-flexbox">
                <p>
                Scolios-us is a web-based platform intended to
                empower patients with the tools and
                resources they need to be successful brace-wearers
                </p>
                <img src = {scolio} alt = "curvy girls"/>
            </div>
            <Row className = "partnership-button-row">
                <Col className = "partnership-button">
                    <a href = "https://www.bracingforscoliosus.org"> Visit Scolios-us </a>
                </Col>
            </Row>
            <div className ="partnerships-wrapper partnerships-flexbox">
                <p>
                Setting Scoliosis Straight is a non-profit 501(c)(3)
                organization devoted to empowering families impacted
                by scoliosis through education, connection, and research.
                Their mission is to support discoveries and advance techniques
                in the treatment of scoliosis in children and adolescents worldwide.
                </p>
                <img src = {ssl} alt = "curvy girls"/>
            </div>
            <Row className = "partnership-button-row">
                <Col className = "partnership-button">
                    <a href = "https://www.settingscoliosisstraight.org"> Visit SSSF </a>
                </Col>
            </Row>
            <div className ="partnerships-wrapper partnerships-flexbox">
                <p>
                Scoliosis & Spine Online Learning is an education
                platform for professionals to teach others about scoliosis.
                They have members from over 90 countries
                and are dedicated to improving patient care for scoliosis patients.
                </p>
                <img src = {ss} alt = "curvy girls"/>
            </div>
            <Row className = "partnership-button-row">
                <Col className = "partnership-button">
                    <a href = "https://www.scoliosisandspineonlinelearning.com"> Visit SSOL </a>
                </Col>
            </Row>
        </div>
    );
};

export default Partnerships;