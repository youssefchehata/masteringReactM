import React, { Component } from "react";
import Modal      from "react-bootstrap/Modal"   ;
import Info       from "./UserEditTab/Info"      ;
import MotDePasse from "./UserEditTab/MotDePasse";
import Groupes    from "./UserEditTab/Groupes"   ;

class UserEdit extends Component {
  state = { 
    showCreate: this.props.showCreate,
     model: "",
      filter: this.props.filter,
       submitted: false,
        error: false,
         loading: true };
 
  handleChange = e => { this.setState({ [e.target.name]: e.target.value }); };

  closeModal = () => { this.props.handleHide(); };

  componentWillReceiveProps = nextProps => {
    this.setState({ filter: nextProps.filter });
    if (nextProps.showCreate !== this.state.showCreate) {
      if (nextProps.showCreate) {
        // Fill data by id and showCreate modal
        this.setState({ showCreate: nextProps.showCreate });
      } else {
        // Empty modal and clear error in hide of modal
        this.setState({ showCreate: false, submitted: false, error: false });
      }
    }
  };

  render() {
    const { submitted, model } = this.state;
    return (

<Modal show={this.state.showCreate} onHide={this.props.handleHide} onShow={this.props.handleShow} dialogClassName="modal-lg" aria-labelledby="payment-create" >
<Modal.Header closeButton>
<Modal.Title id="client-agence-edit">
<h5 className="title-14 mb-0"> <span className="title-13">Modifier Utilisateur :</span> {model.raisonSocial} </h5>
</Modal.Title>
</Modal.Header>

<Modal.Body>
<nav>
<div className="nav nav-tabs " id="nav-tab" role="tablist">
<a className="nav-item nav-link text-dark active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" >Info</a>
<a className="nav-item nav-link text-dark " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Mot de passe</a>
<a className="nav-item nav-link text-dark " id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Groupes</a>
</div>
</nav>
<div className="tab-content" id="nav-tabContent">
<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Info id={this.props.id} onClick={this.handleSubmit} model={this.state.model} onChange={this.handleChange} /></div>
<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><MotDePasse onClick={this.handleSubmit} model={this.state.model} onChange={this.handleChange} /></div>
<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><Groupes onClick={this.handleSubmit} model={this.state.model} /></div>
</div>
</Modal.Body>
        {/* ------------------- */}
<Modal.Footer>
<button type="button" id="client-agence-edit-close" className="btn btn-secondary" onClick={this.props.handleHide} > Fermer </button>
</Modal.Footer>

</Modal>
    );
  }
}

export default UserEdit;
