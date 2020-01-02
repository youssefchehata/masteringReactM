import React, { Component } from 'react'
import SongList from './song/SongList';
class Redux_1 extends Component {
    state = {}
    render() { 
        return ( <div className="container pt-4">
            <div className="row">
                <div className="col-6"><SongList/></div>
            </div>
            
             </div> )
    }
}
 
export default Redux_1;