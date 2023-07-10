import React from "react";
import "./ImportantDates.css"
const ImportantDates = () => {
    return (
        <div className = "important-dates-container">
            <header>
                Important Dates
            </header>
            <div className="important-date-text">
                <span className="date-title"> Accepting Submissions: </span> February 1st, 2021
            </div>
            <div className="important-date-text">
                <span className="date-title"> Regular Deadline: </span> March 30, 2022, at 11:59 pm EST
            </div>
            <div className="important-date-text">
                <span className="date-title"> First Round: </span> Entries will be judged online in April 2022
            </div>
            <div className="important-date-text">
                <span className="date-title"> Second Round: </span> Entries that advance from the First Round will be judged online in April
            </div>
            <div className="important-date-text">
                <span className="date-title"> Finalists announced: </span> April 25th 2022
            </div>
            <div className="important-date-text">
                <span className="date-title"> Award Ceremony: </span> June 30th 2022
            </div>
        </div>
    );
}

export default ImportantDates;