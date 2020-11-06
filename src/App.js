import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";

function App() {
    return (
        <BreakpointProvider>
            <div className="app">
                <Router>
                    <Switch>
                        <Route/>
                        <Route/>
                        <Route/>
                    </Switch>
                </Router>
            </div>
        </BreakpointProvider>
    )
}

export default App;