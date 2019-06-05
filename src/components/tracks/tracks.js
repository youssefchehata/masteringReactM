import React, { Component } from 'react';
import Track from './track';
import Search from './search';
import Spinner from './layout/Spinner';
import Navbar from './layout/Navbar';
class Tracks extends Component {
  state = {
    track_list: 'j',
    heading: '5'
  };
  render() {
    if (this.state.track_list.length === 0 || this.state.heading.length === 0)
      return <Spinner />;
    else
      return (
        <div className="container">
          <Navbar />
          <Search />
          <Track />
        </div>
      );
  }
}

export default Tracks;
