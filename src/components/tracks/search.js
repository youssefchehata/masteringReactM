import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackTitle: '',
      
    };
  }
 

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const { trackTitle } = this.state;
    let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=02b394b42e0e97a4372d9754855b7d37`;
    e.preventDefault();
    axios
      .get(url)
      .then(res => {
        // console.log(res.data);
        this.props.setfilter(res.data.message.body.track_list);
      })
      .catch(err => { console.log(err); });
  };

  render() {
    console.log(this.state.track_list);

    return (
      <div className="container">
        <h1 className="display-4 text-center">
          <i className="fas fa-music" /> Search For A Song
        </h1>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg"
            value      ={this.state.trackTitle}
            placeholder="Search..."
            name       ="trackTitle"
            onChange   ={this.handleChange}
          />
          <button
            className="btn btn-primary btn-lg btn-block my-4"
            type="submit"
          >
            Get Track Lyrics
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
