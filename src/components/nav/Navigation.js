import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div id="Navigation">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to="/">Mackenzie Clark</Link>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-2">
                        <Link to="/Portfolio">Portfolio</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/Contact">Contact</Link>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;