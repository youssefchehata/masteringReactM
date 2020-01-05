import React, { Component } from 'react';
import SongList from './song/SongList';
import SongDetails from './song/SongDetails';
import TrendingHotel from './userId/TrendingHotel';
class Redux_1 extends Component {

  render() {
    return (
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-6'>
            <SongList />
          </div>
          <div className='col-6'>
            <SongDetails />
          </div>
        </div>
        <div
          className='coverflow-auto'
          style={{
            overflowY: 'scroll',
            border: '1px solid ',
            width: '500px',
            
            height: '500px',
            // position: 'relative'
          }}
        >
          <TrendingHotel />
        </div>
      </div>
    );
  }
}

export default Redux_1;
