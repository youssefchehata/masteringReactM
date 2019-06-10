import React, { Component } from 'react';

class Search extends Component {
 state = {
      trackTitle: '',
      
    };
  
 

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit=(e)=>{
 e.preventDefault()
 this.props.search(this.state.trackTitle)
  }
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
