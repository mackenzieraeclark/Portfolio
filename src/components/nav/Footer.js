import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div id="Footer">
            <div className="container">
                <div className="row">
                    <Link to="/">Home</Link>
                </div>
                <div className="row">
                    <Link to="/Portfolio">Portfolio</Link>
                </div>
                <div className="row">
                    <Link to="/Contact">Contact</Link>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <p>Made with ❤️ in NYC</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;