import React from "react";
import { Breakpoint } from "react-socks";

// graphics
import UnderConstruction from "./UnderConstruction.gif";

function CurrentProject() {
    return (
        <div>

            <img src={UnderConstruction} alt="Website under construction with animated cranes." id="UnderConstruction" />

            
            {/* Mobile / Tablet */}
            {/* <Breakpoint></Breakpoint> */}

            {/* Web */}
            {/* <Breakpoint>
                <div>
                    <img src={UnderConstruction} alt="Website under construction with animated cranes." />
                </div>
            </Breakpoint> */}
        </div>
    )
}

export default CurrentProject;