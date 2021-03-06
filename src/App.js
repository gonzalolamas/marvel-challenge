import React from "react";
import HomePage from "./pages/HomePage";
import "./assets/css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
