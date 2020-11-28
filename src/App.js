import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import "./style.css";

// container imports
import Landing from "./containers/Landing";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
    return (
        <BreakpointProvider>
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/Portfolio" component={Portfolio} />
                        <Route exact path="/Contact" component={Contact} />
                    </Switch>
                </Router>
            </div>
        </BreakpointProvider>
    )
}

export default App;