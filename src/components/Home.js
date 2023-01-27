import React from "react";
import Form from "./Form";
import './Home.css'
import resim1 from '../imgs/Pizza.png';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div>
        <Router>
          <div className="img">
            <img src={resim1} className="pizza_img" />

            <a id="order-pizza-2" to="/pizza" className="buttons">Pizza?</a>

          </div>
          <Switch>
            <Route path="/pizza" component={Form} />
          </Switch>
        </Router>
      </div>

      <h1 className="photos_header">Food Delivery in Grotham City</h1>
      <div className="photo_sections">

        <div>
          <div className="photo_container">
            <div className="photos">
              <img src={resim1} className="images" />
              <h3>McDonals</h3>
              <p className="texts">$ - American - Fast Food - Burgers</p>
              <div className="text_buttons">
                <p className="text_buttons_1">20 - 30 mins</p>
                <p className="text_buttons_2">5.99 Delivery fee</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="photo_container">
            <div className="photos">
              <img src={resim1} className="images" />
              <h3>Sweetgreen</h3>
              <p className="texts">$ - Healthy - Salads</p>
              <div className="text_buttons">
                <p className="text_buttons_1">30 - 45 mins</p>
                <p className="text_buttons_2">4.99 Delivery fee</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="photo_container">
            <div className="photos">
              <img src={resim1} className="images" />
              <h3>Starbucks</h3>
              <p className="texts">$ - Coffe - Coffe & Tea - Breakfast & Brunch</p>
              <div className="text_buttons">
                <p className="text_buttons_1">10 - 20 mins</p>
                <p className="text_buttons_2">3.99 Delivery fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;