import React, { Component } from "react";
import Spinner from "react-spinkit";
import LoadingOverlay from "react-loading-overlay";
// import styled from 'styled-components'
import Flex from "../Flex";
class loadingOverlay extends Component {
  state = {
    isActive: true
  };
  loading = () => {
    this.setState({ loading: true });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className="container">
        <LoadingOverlay
          active={isActive}
          spinner={
            <Spinner name="ball-clip-rotate"  color="orange" />
          }
          styles={{
            spinner: base => ({
              ...base,
              width: "1px",
              height: "500px"
            }),
            overlay: base => ({
              ...base,
              background: "gray"
            }),
            content: base => ({
              ...base,
              overlay: "white",
              position: "fixed",
              top: "50%",
              left: "45%"
            })
          }}
        >
          <Flex />
        </LoadingOverlay>
      </div>
    );
  }
}

export default loadingOverlay;
