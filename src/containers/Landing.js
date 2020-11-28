import React from "react";

//components
import Navigation from "../components/nav/Navigation";
import CurrentProject from "../components/landing/CurrentProject";

function Landing() {
    return (
        <div>
            <Navigation/>
            <CurrentProject/>
        </div>
    )
}

export default Landing;