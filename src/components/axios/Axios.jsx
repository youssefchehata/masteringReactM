import React, { Component } from "react";
import Get from "./GET";
import Post from "./POST";
import Delete from './DELETE.jsx';
import Delete2 from './Delete.js';
class Axios extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="bg-info text-white ">GET Requests</h1>
            <Get />
          </div>
          <div className="col-md-3">
            <h1 className="bg-info text-white ">POST Requests</h1>
            <Post />
          </div>
          <div className="col-md-3">
            <h1 className="bg-info text-white ">Delete Requests</h1>
            <Delete />
          </div>
          <div className="col-md-3">
            <h1 className="bg-info text-white ">DELETE JS</h1>
            <Delete2 />
          </div>

        </div>
      </div>
    );
  }
}

export default Axios;
