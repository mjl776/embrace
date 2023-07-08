import React from "react";
import "./AwardsDesc.css"
import {Row, Col} from "react-bootstrap";
const AwardsDesc = () => {
    return (
        <div className = "awards-desc-container">
            <header>
                Awards
            </header>
            <div className = "awards-subheader">
                Multiple cash prizes totaling up to $5,000
            </div>
            <div className = "description-awards">
                emBrace gives out awards for each category. However, some awards will
                <br/>
                be given to individuals with the best work in the entire competition.
                <br/>
                Every individual who wins an award will receive a cash prize and have
                <br/>
                their designs included in the new Friddles Back Brace line.
                All artists
                <br/>
                who win a prize will be notified via email and we will post the winners on
                <br/>
                our website.
                <Row className = "awards-button-row">
                    <Col> <div className="awards-button"> Individual Categories </div> </Col>
                    <Col> <div className="awards-button"> All Categories </div> </Col>
                </Row>
            </div>
        </div>
    );
};

export default AwardsDesc;