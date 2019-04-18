import React, { Component } from "react";
import NavsBootstrap from "./navsBootstarp";
import One from "./one";
import Tow from "./tow";
import Reutilisablenavs from "./reutilisablenavs";
class NavsViews extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <h1>Navs_Views</h1>
        <NavsBootstrap />
        
        <hr />
        <Reutilisablenavs/>
      </div>
    );
  }
}

export default NavsViews;
