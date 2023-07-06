import React from 'react';
import "./SubmitDesign.css"

const SubmitDesign = () => {
    return (
        <div className = "submit-design-container">
            <header className = "submit-design-header">
                Submit Your Design
            </header>
            <div className = "submit-design-description">
            Upload your work here <span className = "submit-deadline">(Deadline: March 30th (11:59 pm)</span>. Artwork must be in .pdf or .jpeg format and at least 300 dpi.
                <br/>
                Each entrant may submit up to five designs. Please look at entry examples above
            </div>
            <div className = "to-do-list-submit">
                <ol>
                    <li> Send designs to <a className = "mail-to-email-designs" href="mailto:embracecompetition@gmail.com"> embracecompetition@gmail.com </a> </li>
                    <li> Make the subject header <span className ="design-comp-title"> 2022 Competition Entry </span> </li>
                    <li> The email should include:
                        <ul>
                            <li>
                                Applicant Name
                            </li>
                            <li>
                                Category (see categories below)
                            </li>
                            <li>
                                Phone number
                            </li>
                        </ul>
                    </li>
                    <li> Upload your pattern design as a pdf or jpeg. Feel free to add a name for your design. </li>
                </ol>
            </div>
        </div>
    );
}

export default SubmitDesign;