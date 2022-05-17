import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Advert from "./components/Advert/Advert";

const App = () => {
  return (
    <div className="App">
      <Advert />
      <Navigation />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
