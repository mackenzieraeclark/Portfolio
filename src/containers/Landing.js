import React from "react";
import { Breakpoint } from "react-socks";
import "../style.css";

//components
import CurrentProject from "../components/landing/CurrentProject";

function Landing() {
    return (
        <div>

            <CurrentProject/>


            {/* Mobile / Tablet */}
            {/* <Breakpoint></Breakpoint> */}

            {/* Web */}
            {/* <Breakpoint>
                <CurrentProject/>
            </Breakpoint> */}
        </div>
    )
}

export default Landing;