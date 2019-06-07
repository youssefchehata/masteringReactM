import React, { Component } from 'react';
import Spinner from './Spinner';
import Moment from 'react-moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Lyrics extends Component {
  state = {
    lyrics: {lyrics_id: undefined,
    restricted: '',
    instrumental: '',
    lyrics_body: "Now and then I think of when we were together\r\n...",
    lyrics_language: '',},
    track: {},
    test:{ysf:[{name:'one'}, {name:'tow'} ], length:0}

  };
 
  componentDidMount = () => {
    return axios

      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id${
            this.props.match.params.id
        }&apikey=02b394b42e0e97a4372d9754855b7d37`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics });
      })
      .catch(err => console.log(err));
  };
  componentDidMount = async () => {
    try {
          const res = await axios
              .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=02b394b42e0e97a4372d9754855b7d37`);
          console.log(res.data);
          let track = res.data.message.body.track;
          this.setState({ track });
      }
      catch (err) {
          return console.log(err);
      }
  }

  render() {
      console.log(this.state.lyrics);
    const { lyrics, track,test } = this.state;
    if (
      track === undefined ||
       lyrics === undefined ||
       Object.keys(track).length === 0 ||
       Object.keys(lyrics).length === 0
    )
      return <Spinner />;
    else
      return (
          <React.Fragment>
<div className="container ">
       ProductDetails ID: {this.props.match.params.id}
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card ">
            <h5 className="card-header">
              {track.track_name} by
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
              <p className="card-text">api!lyrics_body</p>
              
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:
              {/* {track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name} */}
           {test.length ===0 ?"NO GENRE AVAILABLE" :test.ysf[0].name    }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:
              {track.explicit === 0 ? 'No' : 'Yes'}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:
              <Moment format="MM/DD/YYYY">
                {track.first_release_date}
              </Moment>
            </li>
          </ul>
        


</div>
       
          </React.Fragment>
       
          
      );
  }
}

export default Lyrics;
