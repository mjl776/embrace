import React from 'react'
import "./ExampleEntries.css"
import { Row, Col } from 'react-bootstrap';
import validOne from "../../Images/HowToEnter/ValidEntries/entryOne.png";
import validTwo from "../../Images/HowToEnter/ValidEntries/entryTwo.png";
import notValidOne from "../../Images/HowToEnter/NotValidEntries/entryOne.png";
import notValidTwo from "../../Images/HowToEnter/NotValidEntries/entryTwo.png";
import check from "../../Images/HowToEnter/Markers/Check.png"
import Xmark from "../../Images/HowToEnter/Markers/X.png"

const ExampleEntries =  () => {
    return (
        <div className = "examples-of-suitable-entries">
            <header>
                Examples of Suitable Entries
            </header>
            <Row className = "example-entries">
                <Col className = "suitable-entry">
                    <header>
                        Types of Designs We're Looking For
                    </header>
                    <div className = "entry-text">
                        <ul>
                            <li>
                                Simple, understated
                            </li>
                            <li>
                                Pastel color palette (won't show
                                <br/>
                                through clothing)
                            </li>
                            <li>
                                Appealing to tweens (10-15 year-olds)
                            </li>
                        </ul>
                    </div>
                    <Row className = "entry-images">
                        <Col className = "entry-image">
                            <img src = {validOne} alt = "valid entry one"></img>
                            <img src = {check} alt = "check mark"></img>
                        </Col>
                        <Col className = "entry-image">
                            <img src = {validTwo} alt = "valid entry two"></img>
                            <img src = {check} alt = "check mark"></img>
                        </Col>
                    </Row>
                </Col>
                <Col className = "not-suitable-entry">
                    <header>
                        Designs we
                        <span className = "not-suitable-entry-span"> DON'T </span>
                        want to use
                    </header>
                    <div className = "entry-text">
                        <ul>
                            <li>
                                Loud, cartoonish
                            </li>
                            <li>
                                Designs that are visible under clothing
                            </li>
                            <li>
                                Bright colors, neons, dark colors
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <Row className = "entry-images">
                        <Col className = "entry-image">
                            <img src = {notValidOne} alt = "valid entry one"></img>
                            <img src = {Xmark} alt = "X mark"></img>
                        </Col>
                        <Col className = "entry-image">
                            <img src = {notValidTwo} alt = "valid entry two"></img>
                            <img src = {Xmark} alt = "X mark"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className = "disclaimer">
                    Don't feel limited by these guidelines we want you to follow your artistic impulses!
            </div>
        </div>
    );
}

export default ExampleEntries;