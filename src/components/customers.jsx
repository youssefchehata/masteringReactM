import React from "react";
import ButtonLoader from './react-loading-overlay/ButtonLoader'
import LoadingOverlay from "./react-loading-overlay/LoadingOverlay";
const Customers = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <a href="/" className="navbar-brand">
          <i className="fas fa-paw text-light ">My Pets</i>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target=""
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      <hr />
      <div>
        <LoadingOverlay />
      </div>
      <hr/>
      <ButtonLoader/>
    </div>
  );
};

export default Customers;
