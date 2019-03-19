import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "../App.js";
import Rentals from "./Input";
import Customers from "./customers";
import Not_found from "./not_found";
import Bootstrap from "./Bootstrap";
import Bootstrap2 from "./Bootstrap2";
import Divers from "./divers";
import Grid from "./Grid";
import Card from "./Card";
import Flex from "./Flex";
import CssOne from './Css/cssOne/1';
import Axios from "./axios/Axios";
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/app" component={App} />
          <Route exact path="/input" component={Rentals} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/not_found" component={Not_found} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/bootstrap2" component={Bootstrap2} />
          <Route exact path="/grid" component={Grid} />
          <Route exact path="/card" component={Card} />
          <Route exact path="/flex" component={Flex} />
          <Route exact path="/divers" component={Divers} />
          <Route exact path="/Css/cssOne/1" component={CssOne} />
          <Route exact path="/axios/Axios" component={Axios} />

          <Route exact path="/" component={App} />
          {/* <Route path="/movies/:id" component={Movie} /> */}
          <Redirect to="/not_found" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
