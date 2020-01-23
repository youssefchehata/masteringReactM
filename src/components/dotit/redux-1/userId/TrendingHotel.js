import React, { Component } from 'react';
import { connect } from 'react-redux';

import  {fetchTrendingHotel}  from './actions/fetchTrendingHotel';
import UserHeader from './UserHeader';



class TrendingHotel extends Component {
 
  componentDidMount(){
    this.props.fetchTrendingHotel()
  }

  

  ysf=()=>{
    return(this.props.items.map(item => {
      return(
        <div key={item.id}>
<div>
      <span>{item.title}</span> 
</div>
<UserHeader userId={item.userId}/>
    

   
          </div>
      )
    }))
  }
  render() {
    // console.log(this.props.items);
    return (
      <div className='container-fluid ' style={{ backgroundColor: '#EDEDED' }}>
        <h1 className='text-center p-4'>
          <span style={{ color: '#16406d' }}>TrendingHotel</span> Travelkom
        </h1>
        <div className=''>
          <div className=' row row-cols-2 justify-content-center '>
            {/* { this.TrendingHotel()} */}
            <div>{this.ysf()}</div>
          </div>
    
  
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    items: state.items
  }
}

export default connect(mapStateToProps,{fetchTrendingHotel}) (TrendingHotel);
