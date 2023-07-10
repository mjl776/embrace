import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div className = "contact-container">
            <header>
                Contact
            </header>
            <div className = "contact-text">
                Email all inquiries to: <span> <a className="contact-email" href="mailto:embracecompetition@gmail.com"> embracecompetition@gmail.com </a> </span>
            </div>
            <div className = "contact-text">
                Ava Lee - Founder: <span> <a className="contact-email" href="mailto:avakatherine2004@gmail.com"> avakatherine2004@gmail.com </a> </span>
            </div>

        </div>
    );
};

export default Contact;