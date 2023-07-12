import React from "react";
import "./Questions.css";

const Questions = () => {
    return (
        <div className = "questions-container">
            <header>
                Q&A Session
            </header>
            <div className = "wrapper-questions wrapper flex-box">
                <div className = "questions-description">
                For those of you who missed the online webinar, all of the questions and answers from the event can be viewed below!
                </div>

                <div className = "question">
                    Question: Should I submit a single design or a repeating pattern?
                </div>
                <div className = "answer-to-q">
                    Answer: Please submit a repeating pattern.
                </div>
                <div className = "question">
                    Question: Do chosen artists retain the copyright to their work?
                </div>
                <div className = "answer-to-q">
                    Answer: Of course.
                </div>
                <div className = "question">
                    Question: How many pattern designs can I submit?
                </div>
                <div className = "answer-to-q">
                    Answer: Each entrant can submit up to five entries.
                </div>
                <div className = "question">
                    Question: What format should our design be submitted in?
                </div>
                <div className = "answer-to-q">
                    Answer: Please submit all designs in .jpeg or .pdf form.
                </div>
                <div className = "question">
                    Question: Do all pattern designs have to be made digitally?
                </div>
                <div className = "answer-to-q">
                    Answer: Not at all. If you complete your work in watercolor or a different medium, that is totally fine.
                    We just need high-resolution images of your work in a .pdf or .jpeg format.
                </div>
                <div className = "question">
                    Question: How many cash prizes will there be?
                </div>
                <div className = "answer-to-q">
                    Answer: There will be 15 cash prizes distributed, ranging from $100-$1,000.
                </div>
                <div className = "question">
                    Question: What types of designs should we submit?
                </div>
                <div className = "answer-to-q">
                    Answer: Aesthetic, minimalist, and repeating patterns.
                    A lot of the girls who wear braces said they would prefer a pastel color palette.
                </div>
                <div className = "question">
                    Question: When is the deadline?
                </div>
                <div className = "answer-to-q">
                    Answer: March 30th, 2022.
                </div>
                <div className = "question">
                    Question: Are the back braces made of plastic or fabric?
                </div>
                <div className = "answer-to-q">
                    Answer: They are made of plastic.
                </div>
                <div className = "question">
                    Question: Is this the first year emBrace is hosting a competition?
                </div>
                <div className = "answer-to-q">
                    Answer: Yes! This is our first year hosting a competition
                </div>
                <div className = "question">
                    Question: Where can I contact you with any questions?
                </div>
                <div className = "answer-to-q">
                    Answer: You can submit all inquiries to  <span><a className="contact-q-email" href="mailto:embracecompetition@gmail.com"> embracecompetition@gmail.com</a> </span>
                     To reach the founder Ava Lee, please contact <span> <a className="contact-q-email" href="mailto:avakatherine2004@gmail.com">avakatherine2004@gmail.com</a> </span>
                </div>
            </div>
        </div>
    );
};

export default Questions;

