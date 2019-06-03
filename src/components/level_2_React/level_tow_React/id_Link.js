
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Params from './params';
class Id_Link extends Component {
    state = {}

    render() { 
       
        const {params}=this.props.match
        return ( 
            <div className="container">
            
      <div>
        <h3>ID: {params.id}</h3>
        <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/id_Link/1">User 1 </Link>
          </li>
          <li>
            <Link to="/id_Link/2">User 2 </Link>
          </li>
          <li>
            <Link to="/id_Link/3">User 3 </Link>
          </li>
        </ul>
        {/* <Route path="/id_Link/:id" component={Params} /> */}
      </div>
      </div>
            </div>
         )
    }
}
 
export default Id_Link;
