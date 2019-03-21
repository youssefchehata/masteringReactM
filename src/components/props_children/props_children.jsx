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
        <p className="bg-info mt-2">
          children is the only prop that's not passed via attribute like onClick
          onChange key or style. Rather, it's implicitly passed when you wrap it
          with a React component (considered the "parent" component). The
          language of "parent" and "child" is from HTML where you have parent
          and children DOM nodes.
        </p>
      </div>
    );
  }
}

export default props_children;
