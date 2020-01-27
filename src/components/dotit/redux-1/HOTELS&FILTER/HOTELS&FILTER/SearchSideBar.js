import React, { Component } from 'react'
import {searchform} from '../../HOTELS&FILTER/HOTELS&FILTER/actions/fetchListHotels'
import { connect } from 'react-redux'
class SearchSideBar extends Component {
 
    onChange=(e)=>{
        this.props.searchform(this.props.hotels,e.target.value)
    }

    // onSubmit = e => {
    //     e.preventDefault();
    //     this.props.fetchAllHotels(this.props.text,this.props.hotels);
      
    //   };
    render() { 
        return ( <div className='form-group'>
            <label htmlFor=""><input className='form-control'placeholder='Search...' 
         
            type="text"onChange={this.onChange} /></label>
             {/* <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button> */}
        </div> )
    }
}
 const mapStateToProps = (state) => {
     return {
        text: state.hotels.text,
        hotels: state.hotels.items,
      
     }
 }
export default connect(mapStateToProps,{searchform}) (SearchSideBar);