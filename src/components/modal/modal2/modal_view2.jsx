import React, { Component } from "react";
import Modal2 from "./modal2";
class Modal_view2 extends Component {
  state = {};
  handleShow = () => {
    this.setState({ showCreate: true });
  };

  handleHide = () => {
    this.setState({ showCreate: false });
  };

  OpenModal1 = () => {
    this.setState({ showCreate: true });
  };

  actionsColumn = (id, value) => {
    return (
      <React.Fragment>
        <a href="#" onClick={() => this.OpenModal1()} title="Modifier User">
          +++
        </a>
      </React.Fragment>
    );
  };
  render() {
    return (
      <div className="container">
        modal_view2
        {this.actionsColumn()}
        <Modal2
          handleHide={this.handleHide}
          handleShow={this.handleShow}
          showCreate={this.state.showCreate}
        />
      </div>
    );
  }
}

export default Modal_view2;
