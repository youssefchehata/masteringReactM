import React  from "react";
export default class PrimaryButton extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <button onClick={this.props.onClick}>
          {this.props.text}
          {this.props.icon}
        </button> */}
        <hr />
        <button className="btn-success" onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
}


