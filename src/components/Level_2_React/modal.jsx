import React, { Component } from "react";
import "./modal.css";
export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <React.Fragment>
              {on && (
          <div className='ModalWrapper'>
 
          
            <div className='ModalCard'>
           
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 d-flex flex-row-reverse">

             <button type="button" className="btn btn-warning " onClick={toggle}><span aria-hidden="true">&times;</span></button>
              </div>
             <div className="col-12"> <div>{children}</div> </div>
              <hr/>
          
             
             
             </div>
            
            </div>
         
              
             
             
            </div>
            <div className='Background' onClick={toggle} />
          </div>
        )}
      </React.Fragment>
    );
  }
}
