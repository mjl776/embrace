import React from 'react';
import "./TermsAndConditions.css"
const TermsAndConditions = () => {
    return(
        <div className="terms-conditions-container">
            <header>
                Terms and Conditions
            </header>
            <div className = "description-terms">

                The entrant grants permission to emBrace
                to show, copy, or use the entries at such
                times as emBrace deems appropriate. emBrace reserves the right to make available for reference purposes including electronic publishing and printing.
                The entrant or person submitting the work is responsible for ensuring that any copyrighted material has been approved or released and does not hold emBrace legally responsible for any
                matters pertaining to the creation of the work. If any network, local television, or radio station shall agree to telecast a news or
                other program relating to the emBrace Competition, the entrant further agrees to obtain any permissions and to absorb talent
                or other residual charges incurred by inclusion of his or her entry in the program, if required.
                <br/>
                <br/>
                Decisions of judges on all matters during judging, including qualifications
                and categories, are final. Any disputes that may arise will be decided
                by the emBrace Board. emBrace reserves the right to disqualify work
                that it finds to be fatally compromised as to originality or veracity after review and final decision by emBrace.
            </div>
            <header>
                Non-Compliance
            </header>
            <div className = "description-terms">
                emBrace reserves the right to review all entries questioned during the judging process.
            </div>
        </div>
    );
};

export default TermsAndConditions;