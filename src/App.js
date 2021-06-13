import React from "react";
import HomePage from "./pages/HomePage";
import Character from "./pages/Character.js"
import "./assets/css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hero/:heroId" component={Character} />
      </Switch>
    </Router>
  );
}

export default App;
