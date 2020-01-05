import { combineReducers } from 'redux';
import TrendingHotelReducer from '../../userId/reducerss/TrendingHotelReducer';
import usersReducer from '../../userId/reducerss/usersReducer';

const songReducer = () => {
  return [
    { title: 'No Scrub', duration: '4:05' },
    { title: 'Macarina', duration: '2:05' },
    { title: 'All Star', duration: '3:05' },
    { title: 'I Want it That Way', duration: '4:05' }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
  items: TrendingHotelReducer,
  users: usersReducer
  // replaceMe:()=>'aaaa'
});
