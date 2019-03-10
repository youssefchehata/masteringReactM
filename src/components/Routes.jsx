import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../App.js';
import Rentals from './Rentals';
import Customers from './customers';
import Movie from './Movie.jsx';
import Not_found from './not_found';
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/app" component={App} />

          <Route exact path="/rentals" component={Rentals} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/not_found" component={Not_found} />
          <Route exact path="/" component={App} />
          {/* <Route path="/movies/:id" component={Movie} /> */}
          <Redirect to="/not_found" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
