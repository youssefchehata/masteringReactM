import React, { Component } from "react";
import Spinner from "react-spinkit";
import LoadingOverlay from "react-loading-overlay";
import Swal from 'sweetalert2'
// import InfoUserEditModels from "../../../../../../models/User/InfoUserEditModels"
import BankService from "../../../../../../services/bank.service";
import BankEditModel from '../../../../../../models/Bank/BankEditModels';


class Info extends Component {
  state = {

      model: new BankEditModel(0, ""),
      submitted: false,
      error: false,
      loading: true
    };
    bankService = new BankService()
  


    async componentDidMount() {
      try {
      const { data: model } = await this.bankService.get(this.props.id)
    
      this.setState({ model , loading: false })
    } catch (ex) { alert("An unexpected error occurred.") }
  
    }
  // fetchData = (id) => {
  //   this.setState({ loading: true })
  //   if (id) {
  //     this.bankService.get(id)
  //       .then((response) => {
  //         const model = new BankEditModel(
  //           response.data.id, (response.data.label) ? response.data.label : "");
  //         console.log(model);
  //         this.setState({ model: model, loading: false });
  //       })
  //       .catch(error => { alert("error"); }
  //       );
  //   }
  // }

  // componentDidMount = () => this.fetchData(this.props.id)


  render() {

    const { onChange, onClick } = this.props;
    const { model } = this.state;
    const label = model.label;
    console.log(label)
    return (

      <div className="container" >
        <LoadingOverlay text="Loading ..." active={this.state.loading} spinner={<Spinner name="ball-clip-rotate" color="white" />} >

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Banque <span style={{ color: "red" }}>*</span></label>
              <input type="text" className="form-control" name="label" value={label} onChange={this.handleChange} />
            </div>
           
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


