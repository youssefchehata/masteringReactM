import React, { Component } from 'react';
class Modal extends Component {
    // state = {
    //     showCreate: this.props.showCreate,
    //     model: '',
    //     filter: this.props.filter,
    //     submitted: false,
    //     error: false
    //   };
    //   closeModal = () => {
    //     this.props.handleHide();
    //   };
    //   componentWillReceiveProps = (nextProps) => {
    //     this.setState({
    //       filter: nextProps.filter
    //     });
    //     if (nextProps.showCreate != this.state.showCreate) {
    //       if (nextProps.showCreate) {
    //         // Fill data by id and showCreate modal
    //         this.setState({ showCreate: nextProps.showCreate });
    //       } else {
    //         // Empty modal and clear error in hide of modal
    
    //         this.setState({ showCreate: false, submitted: false, error: false });
    //       }
    //     }
    //   }
    render() { 
        // const { submitted, model } = this.state;
        return (
         " Modal2"
          //   <Modal
          //   show={this.state.showCreate}
          //   onHide={this.props.handleHide}
          //   onShow={this.props.handleShow}
          //   dialogClassName="modal-lg"
          //   aria-labelledby="payment-create"
          // >
          //   <Modal.Header closeButton>
          //     <Modal.Title>Modal heading</Modal.Title>
          //   </Modal.Header>
          //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          //   <Modal.Footer>
          //     <button
          //       type="button"
          //       id="client-agence-edit-close"
          //       className="btn btn-secondary"
          //       onClick={this.props.handleHide}
          //     >
          //       Fermer
          //     </button>
          //     <button
          //       type="button"
          //       className="btn btn-custom-yellow"
          //       onClick={this.handleSubmit}
          //     >
          //       Enregistrer
          //     </button>
          //   </Modal.Footer>
          // </Modal>
        );
      }
    }
 
export default Modal;