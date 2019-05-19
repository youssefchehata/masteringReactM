import React, { Component } from 'react';
class SetState extends Component {
  state = {
    show: true,
    counter: 1
  };
//   ------------------
//   toggle = () => {
//     this.setState({ show: !this.state.show });
//   };
// ------------------------
//   toggle = () => {
//     this.setState(state=>{
//      return   { show: !state.show }
//     });
//   };
// --------------------------
//   toggle = () => {
//     this.setState(state=>{
//      return   { show: !state.show }
//     });
//   };
toggle = () => {
    let togglekey=key=>state=>{
        return { [key]:!state[key] }
    }
    this.setState(togglekey('show') );
  };
//   --------count---------------------
// count = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   -------------------------------
// count = () => {
//     this.setState(state=>{
//         return { counter: this.state.counter + 1 }
//     });
//   };

//   -----------------------------------
  render() {
    return (
      <div className="container">
        <h1>setState</h1>
        <div>
          <button onClick={this.toggle} className="btn-warning">
            show
          </button>
          {this.state.show && 
          <p>hhhhhhhhhhhhhhhhhhhhhhhhh</p>}
        </div>
        <div>
        <button onClick={this.count} className="btn-warning"> count
          </button>
          <p>{this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default SetState;
