import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions/fetchUser';


class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);
    if (!user) {
      return <span>Loading...</span>;
    }
    return <div>
      {user.phone}
    </div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUser }) (UserHeader);
// 
