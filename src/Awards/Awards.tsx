import React from "react"
import AwardsDesc from "./AwardsDesc";
import TiersAwards from "./TiersAwards";

const Awards = () => {
    return (
        <div className="awards-container">
            <AwardsDesc/>
            <TiersAwards/>
        </div>
    );
}

export default Awards;