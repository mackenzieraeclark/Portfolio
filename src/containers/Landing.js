import React from "react";

//components
import Navigation from "../components/nav/Navigation";
import CurrentProject from "../components/landing/CurrentProject";
import Footer from "../components/nav/Footer";

function Landing() {
    return (
        <div>
            <Navigation/>
            <CurrentProject/>
            <Footer/>
        </div>
    )
}

export default Landing;