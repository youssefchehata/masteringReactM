import React, { Component } from "react";
import CheckBoxOne from './CheckBoxOne'

export class CheckBoxView extends Component {
  state = {};

  render() {
    return <div className="container">checkboxview
    
    <CheckBoxOne/>
    </div>;
  }
}

export default CheckBoxView;
