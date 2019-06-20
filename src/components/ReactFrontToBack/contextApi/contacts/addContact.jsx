import React, { Component } from 'react';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  onChange=(e)=>{ this.setState({[e.target.name]:e.target.value}) }
  onSubmit=(e)=>{
      e.preventDefault()
      
  }
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onChange}
                className="form-control form-control-lg"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
                className="form-control form-control-lg"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.onChange}
                className="form-control form-control-lg"
                placeholder="Enter phone"
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
