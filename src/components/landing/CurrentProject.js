import React from "react";

// graphics
import UnderConstruction from "../../assets/underConstruction.gif";

function CurrentProject() {
    return (
        <div>
            <img src={UnderConstruction} alt="Website under construction with animated cranes." id="UnderConstruction" />
        </div>
    )
}

export default CurrentProject;