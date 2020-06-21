import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Character from "./containers/Character";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/character/:id" component={Character} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
