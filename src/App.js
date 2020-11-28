import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import "./style.css";

// container imports
import Landing from "./containers/Landing";

function App() {
    return (
        <BreakpointProvider>
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route/>
                        <Route/>
                    </Switch>
                </Router>
            </div>
        </BreakpointProvider>
    )
}

export default App;