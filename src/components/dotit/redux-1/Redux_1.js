import React, { Component } from 'react'
import SongList from './song/SongList';
import SongDetails from './song/SongDetails';
import TrendingHotel from './userId/TrendingHotel';
class Redux_1 extends Component {
    state = {}
    render() { 
        return ( <div className="container pt-4">
            <div className="row">
                <div className="col-6"><SongList/></div>
                <div className="col-6"><SongDetails/></div>
            </div>
            <div><TrendingHotel/> </div>
             </div> )
    }
}
 
export default Redux_1;