import React from "react";
import "./App.scss";
import Navbar from "./Layout/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import StyleGuide from "./Styleguide";
import Login from "./Login";
import Chart from "./components/Chart/chart";
import MyForm from "./components/Forms";

function App() {
  return (
    <div className={"app"}>
      <Navbar title={"Try"} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/style" component={StyleGuide} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forms" component={MyForm} />
      </Switch>
    </div>
  );
}

export default App;
