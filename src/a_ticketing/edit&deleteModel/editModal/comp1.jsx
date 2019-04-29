import React, { Component } from "react";
import Spinner from "react-spinkit";
import LoadingOverlay from "react-loading-overlay";
import Swal from 'sweetalert2'
// import InfoUserEditModels from "../../../../../../models/User/InfoUserEditModels"
import BankService from "../../../../../../services/bank.service";



class Info extends Component {
  state = { model: {}, submitted: false, error: false, loading: true, };

  bankService = new BankService()

  async componentDidMount() {
    try {
      const { data: model } = await this.bankService.get(this.props.id)

      this.setState({ model, loading: false });

    } catch (ex) { alert("An unexpected error occurred.") }

  }

  handleChange = e => { 
    let model =this.state.model
    model[e.target.name]=e.target.value
    this.setState({  model })
   };
  
  // -----------submit-------------
  handleSubmit = (e) => {

    e.preventDefault();
    this.setState({ submitted: true });
    if (this.state.model.label) {
      this.bankService
        .put(this.state.model)

        .then((response) => { alert("submitted") })
        .catch(error => {
          this.setState({ error: true });
          alert( 'error' )
        });
    }
  }

  render() {
    const { model } = this.state;
    return (
      <div className="container" >
        <LoadingOverlay text="Loading ..." active={this.state.loading} spinner={<Spinner name="ball-clip-rotate" color="white" />} >
          <div className="row">
            <div className="col">
<form  submitted={this.state.submitted}>
<div className="form-group">
  <label>Nom d'utilisateur</label>
  <input type="text" className="form-control" name="label" value={model.label} onChange={this.handleChange} />
</div>
</form>

<div className="form-group">
<button type="button" className="btn btn-custom-yellow" onClick={this.handleSubmit} > Enregistrer </button>
</div>
            </div>
          </div>

        </LoadingOverlay>
      </div>

    );
  }
}

export default Info;


