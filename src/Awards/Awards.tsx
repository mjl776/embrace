import React from "react"
import AwardsDesc from "./AwardsDesc";
import TiersAwards from "./TiersAwards";
import AwardsDescPlatinum from "./AwardsDescPlatinum";
const Awards = () => {
    return (
        <div className="awards-container">
            <AwardsDesc/>
            <TiersAwards/>
            <AwardsDescPlatinum/>
        </div>
    );
}

export default Awards;