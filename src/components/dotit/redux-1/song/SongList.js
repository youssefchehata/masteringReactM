import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from './actions/index';
class SongList extends Component {
  renderList = () => {
   
    return this.props.songs.map(song => {
      return (
        <div className='d-flex border-bottom mb-3 ' key={song.title}>
          <div className=''>{song.title}</div>
          <button
          
            className='btn btn-primary ml-auto'
            style={{ height: '35px' }}
            onClick={() => this.props.selectSong(song)}
          >
            select
          </button>
        </div>
      );
    });
  };
  render() {
    // console.log(this.props);
    return (
      <div className='' style={{ width: '' }}>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
