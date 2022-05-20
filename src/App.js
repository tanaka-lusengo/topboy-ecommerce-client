import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import Advert from "./components/Advert";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <div className="App">
      <Advert />
      <Navigation />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={ProductList} />
      </Switch>
    </div>
  );
};

export default App;
