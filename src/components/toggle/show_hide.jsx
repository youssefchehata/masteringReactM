import React, { Component } from 'react';
// rcc
export default class Show_hide extends Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.toggle} className="btn-info"> Sow*Hide </button>

        {this.state.on && this.props.children //   <h1>toggle_me</h1> 
                                                                        }
      </div>
    );
  }
}
