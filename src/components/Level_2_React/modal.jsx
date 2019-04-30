import React, { Component } from "react";
import "./modal.css";
export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <React.Fragment>
           {on && (
     <div className='div'>
          
<div class='card'>
  <button onClick={toggle}>
    close
 </button>
  <div>{children}</div>
 </div>
<div className='div' onClick={toggle} />
</div> 
        )}
      </React.Fragment>
    );
  }
}
