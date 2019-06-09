import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  state = {
    trackTitle:''
  };
  handleChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value})
  }
  handleSubmit=(e)=>{
e.preventDefault()
  }
  //   useEffect(() => {
  //   axios
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
  //         process.env.REACT_APP_MM_KEY
  //       }`
  //     )
  //     .then(res => {
  //       let track_list = res.data.message.body.track_list;
  //       setState({ track_list: track_list, heading: "Search Results" });
  //     })
  //     .catch(err => console.log(err));
  // }, [trackTitle]);

  // const findTrack = e => {
  //   e.preventDefault();
  //   setTrackTitle(userInput);
  // };
  render() {
    const {trackTitle}=this.state
    return (
      <div className="container">
          <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={this.handleSubmit} >
          <input type="text" className="form-control form-control-lg" 
          placeholder="Search..."name={trackTitle} handleChange={this.handleChange} />
          <button className="btn btn-primary btn-lg btn-block my-4" type="submit">
          Get Track Lyrics
        </button>
        </form>
      </div>
    );
  }
}

export default Search;
