import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import './App.css'
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {

  

  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <div className="container">
        <h2 className="container-header">LAMBDA EATS</h2>
        <Router>
          <div className="app">
            <Link to="/">Home</Link>
            <Link id="order-pizza" to="/pizza">Order</Link>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pizza" component={Form} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
};
export default App;
