import React from 'react'
import "./HowToEnter.css"
import ExampleEntries from './ExampleEntries';

const HowToEnter = () => {
    return (
        <div className = "entries-container">
            <div className = "how-to-enter">
                <header>
                    How to Enter
                </header>
                <div className = "section-hte">
                    Calling all artists for the emBrace competition!
                    We need fresh new repeating pattern
                    <br/>
                    designs.
                    We are looking for modern fashionable patterns.
                    The winning pattern
                    <br/>
                    designs will be transferred onto the
                    surface of back braces and worn by teenage girls.
                    <br/>
                    Media: Digital media, graphic design,
                    web print, pattern design
                    <br/>
                    <br/>
                    Categories (your age): ​
                    <ul>
                        <li>
                            Junior (16 - 19 years old)
                        </li>
                        <li>
                            Adult (20+ years old)
                        </li>
                    </ul>
                    Winning entries are eligible for cash prizes totaling $5,000.
                    Additionally, their
                    <br/>
                    pattern will be included in the upcoming Friddles back brace design collection. View
                    <br/>
                    more information about awards and cash prizes by clicking on the button below.
                </div>
            </div>
            <ExampleEntries/>
        </div>
    );
}

export default HowToEnter;