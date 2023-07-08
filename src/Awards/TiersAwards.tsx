import React from "react";
import "./TiersAwards.css"
import { Row, Col } from "react-bootstrap"

const TiersAwards = () => {
    return (
        <div className = "tiers-awards-container">
            <div className = "wrapper-tiers-awards tiers-award-flexbox">
                <header>
                    Gold, Silver, and Bronze Braces
                </header>
                <p>
                These awards are awarded to individuals in each category.
                Gold winners from each category will proceed to the final
                round and have an opportunity to win the Platinum award.
                All winners receive a cash
                prize and will have their designs included in the upcoming Friddles Back Brace Line.
                </p>
                <br/>
                <Row className = "tiers-awards-description">
                    <Col className = "tiers-awards-description-award">
                        Golden Brace
                    </Col>
                    <Col className = "tiers-awards-description-desc">
                    Winners who receive a Golden Brace award will receive a
                    $500 prize and have their
                    <br/>
                    work entered into the final round across all categories. Their design will also be included in the upcoming Friddles Back Brace Line.
                    There are two Golden Brace awards that will be given out.
                    </Col>
                    <br/>
                </Row>
                <br/>
                <Row className = "tiers-awards-description">
                    <Col className = "tiers-awards-description-award">
                        Silver Brace
                    </Col>
                    <Col className = "tiers-awards-description-desc">
                    Winners who receive a Silver Brace Award will receive a $250 prize.
                    Their design will also be included in the upcoming Friddles Back Brace Line.
                    There are four Silver Brace awards that will be given out.
                    </Col>
                </Row>
                <br/>
                <Row className = "tiers-awards-description">
                    <Col className = "tiers-awards-description-award">
                        Bronze Brace
                    </Col>
                    <Col className = "tiers-awards-description-desc">
                    Winners who receive a Bronze Brace Award will receive a $250 prize.
                    Their design will also be included in
                    the upcoming Friddles Back Brace Line.
                    There are four Silver Brace awards that will be given out.
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TiersAwards;