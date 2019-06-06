import React, { Component } from 'react';
import Track from './track';
import Search from './search';
import Spinner from './layout/Spinner';
import Navbar from './layout/Navbar';
import axios from 'axios';
class Tracks extends Component {
  state = {
    track_list: [
        {track:{artist_name:'abc'}},
        {track:{artist_name:'123'}},
    ],
    heading: 'Top 10 Tracks'
  };

  componentDidMount = () => {
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=02b394b42e0e97a4372d9754855b7d37`
        
        )
      .then(res => {
        console.log(res.data)
        // this.setState({ track_list: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  };

  render() {
      console.log(this.state.track_list.track);
    const { track_list, heading } = this.state;

    if (track_list.length === 0 || track_list === undefined) return <Spinner />;
    else
      return (
        <div className="">
          {/* <Navbar /> */}
          <Search />
          <h3 className="text-center">{heading}</h3>
          {/* {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))} */}
          <div className="text-center">
            {this.state.track_list.map(item => ( <li key={item.id}> {item.track.artist_name}  </li> ))}
          </div>
           
        
        </div>
      );
  }
}

export default Tracks;
