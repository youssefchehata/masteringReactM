import React, { Component } from 'react';
import SongList from './song/SongList';
import SongDetails from './song/SongDetails';
import TrendingHotel from './userId/TrendingHotel';
import GetAll from './getAll&filter/getAll';
class Redux_1 extends Component {

  render() {
    return (
      <div className='container pt-4'>
        <div className='row border '>
          <div className='col-6'> <SongList /> </div>
          <div className='col-6'> <SongDetails /> </div>
        </div>
        <div className="row mt-3">
                 
         <div  className='col-md-6 border' style={{ overflowY: 'scroll',  width: '400px', height: '200px', padding:'22px' }}
        > <TrendingHotel /> </div>
        <div className="col-6"><GetAll/></div>
      </div>
        </div>

    );
  }
}

export default Redux_1;
