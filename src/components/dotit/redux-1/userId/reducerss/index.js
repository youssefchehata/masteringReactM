import {combineReducers} from 'redux'
import TrendingHotelReducer from './TrendingHotelReducer'
import usersReducer from './usersReducer'


export default combineReducers({
  
    items:TrendingHotelReducer,
    users:usersReducer
    // replaceMe:()=>'aaaa'
})