import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";
class props_children extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        {/* <PrimaryButton
          onClick={this.somehandler}
          icon={<i class="fas fa-file-export" />}
          text={"First Button"}
        /> */}
        <PrimaryButton onClick={this.somehandler}>
          <i className="fas fa-file-export" />
          props_children
        </PrimaryButton>
      </div>
    );
  }
}

export default props_children;
