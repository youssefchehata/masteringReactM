import React, { Component } from 'react';
class AddContact1 extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact)
  };
  static defaultProps = {
    name: 'youssef',
    email: 'yy@gmail.com',
    phone: '55-88-88-88'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact 1</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                ref={this.nameInput}
                className="form-control form-control-lg"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                ref={this.emailInput}
                className="form-control form-control-lg"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                ref={this.phoneInput}
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

export default AddContact1;
