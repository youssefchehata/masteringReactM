import React, { Component } from 'react';
class AddContact extends Component {
  state = {
    name: '',
    error: {}
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    //error
    if (name === '') {
      this.setState({ error: { name: 'name is required' } });
      return;
    }
    this.props.addcontact(this.state);
    //clear input
    this.setState({ name: '', error: {} });
  };
  // addcontact = contact => {
   //   let contacts = [contact, ...this.state.contacts];
  //   this.setState({ contacts });
  // };
  classes=()=>{
    const {name}=this.state
    let classes='form-control form-control-lg'
    classes+= name.length ===0 ?" is-invalid":""
  return classes
  }
  render() {
    const { name, error } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">{name}</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className={this.classes()}
                placeholder="Enter Name"
              />
              {error.name}
              {name.length === 0 && <div className="invalid-feedback"> className="invalid-feedback" </div> }
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
