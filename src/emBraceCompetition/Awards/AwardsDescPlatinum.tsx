import React from 'react'
import "./AwardsDescPlatinum.css"
import { Row, Col } from "react-bootstrap"

const AwardsDescPlatinum = () => {
    return (
        <div className = "awards-platinum-container">
            <div className ="wrapper-platinum-awards platinum-awards-flexbox">
                <header>
                    Platinum and The emBrace Award
                </header>
                <p>
                 These are the most prestigious
                 awards in the emBrace competition.
                 These are given to the individuals
                 with the best work in the whole competition.
                 All of these winners will receive a generous
                 cash prize in addition to having their brace
                 designs included in the upcoming Friddles Brace line
                </p>
                <Row className = "platinum-awards-description">
                    <Col className = "platinum-awards-description-award">
                        Platinum Brace
                    </Col>
                    <Col className = "platinum-awards-description-desc">
                        Winners who receive a Bronze Brace Award will receive a $250 prize.
                        Their design will also be included in
                        the upcoming Friddles Back Brace Line.
                        There are four Silver Brace awards that will be given out.
                    </Col>
                </Row>
                <br/>
                <Row className = "platinum-awards-description">
                    <Col className = "platinum-awards-description-award">
                        emBrace Brace
                    </Col>
                    <Col className = "platinum-awards-description-desc">
                        Winners who receive a Bronze Brace Award will receive a $250 prize.
                        Their design will also be included in
                        the upcoming Friddles Back Brace Line.
                        There are four Silver Brace awards that will be given out.
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AwardsDescPlatinum;