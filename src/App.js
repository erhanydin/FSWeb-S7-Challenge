import React from "react";
import './App.css'
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import resim1 from './imgs/Pizza.png';

const App = () => {



  return (
    <>
      <div className="container">
        <Router>
          <div className="app">
            <h2 className="header">LAMBDA EATS</h2> 

            <div className="links">
              <Link to="/" className="buttons">Home</Link>
              <Link id="order-pizza" to="/pizza" className="buttons">Order</Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pizza" component={Form} />
          </Switch>


        </Router>
      </div>

        
    </>
  );
};
export default App;
