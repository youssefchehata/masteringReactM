import React, { Component } from "react";
import Get from "./GET";
import Post from "./POST";
class Axios extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="com-md-6">
            <h1 className="bg-info text-white col-md-6">GET Requests</h1>
            <Get />
          </div>
          <div className="com-md-6">
            <h1 className="bg-info text-white col-md-6">POST Requests</h1>
            <Post />
          </div>
        </div>
      </div>
    );
  }
}

export default Axios;
