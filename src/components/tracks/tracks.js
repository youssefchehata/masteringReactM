import React, { Component } from 'react';
import Track from './track';
import Search from './search';
import Spinner from './layout/Spinner';
import Navbar from './layout/Navbar';
import axios from 'axios';
class Tracks extends Component {
  state = {
    track_list: [
      // {track:{track_id:1, artist_name:'abc'}},
      // {track:{track_id:2, artist_name:'123'}},
    ],
    heading: 'Top 10 Tracks'
  };
  // setfilter = (filterlist) => { this.setState({ track_list: filterlist }); };
  
  search = (title) => {
   let url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=02b394b42e0e97a4372d9754855b7d37`;
       axios
      .get(url)
      .then(res => {
        // console.log(res.data);
        this.setState({track_list:res.data.message.body.track_list})
      })
      .catch(err => { console.log(err); });
  };



  componentDidMount = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=02b394b42e0e97a4372d9754855b7d37`
      )
      .then(res => {
        // console.log(res.data)
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.track_list.track);
    const { track_list, heading } = this.state;

    if (track_list.length === 0 || track_list === undefined) return <Spinner />;
    else
      return (
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Search search={this.search} />
            <h3 className="text-center mb-5">{heading}</h3>
            <div className="row  justify-content-center ">
              {track_list.map(item => (
                <Track key={item.track.track_id} track={item.track} />
              ))}
            </div>

            {/* {this.state.track_list.map(item => ( <li key={item.id}> {item.track.artist_name}  </li> ))} */}
          </div>
        </React.Fragment>
      );
  }
}

export default Tracks;
