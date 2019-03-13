import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Vidly <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rentals">
                Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bootstrap">
                Bootstrap
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bootstrap2">
                Bootstrap2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/divers">
                Divers
              </Link>
            </li>
            
            <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <Link className="dropdown-item" to="/grid">Grid</Link>
      <Link className="dropdown-item" to="card">Card</Link>
      <Link className="dropdown-item" to="#">Something else here</Link>
      <div role="separator" class="dropdown-divider"></div>
      <Link className="dropdown-item" to="#">Separated link</Link>
    </div>
  </div>




          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
