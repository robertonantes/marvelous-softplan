import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store/store";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Character from "./containers/Character";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/character/:id" component={Character} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
