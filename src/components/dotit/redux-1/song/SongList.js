
import React, { Component } from 'react'
import { connect } from 'react-redux';
class SongList extends Component {
    state = {}
    render() { 
        // console.log(this.props);
        return (     <div>
            SongList
        </div> )
    }
}
 const mapStateToProps = (state) => {
    console.log(state);
     return {
        
        //  state
         songs: state.songs
     }
 }
export default connect(mapStateToProps)(SongList);

    

