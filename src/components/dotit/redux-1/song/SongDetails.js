import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  console.log(song);
  if (!song) {
    return <div>select a song</div>;
  }
  return (
    <div>
      <h3>Details for</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    song: state.selectedSong
  };
};
export default connect(mapStateToProps)(SongDetails);
