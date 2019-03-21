import React from 'react'

import API from './api';

export default class Delete2 extends React.Component {
    state = {
        id: '',
      }
    
      handleChange = e => {
        this.setState({ id: e.target.value });
      }
  handleSubmit = event => {
    event.preventDefault();

    API.delete(`users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }

}