import React, { Component } from 'react'
import {searchform} from './actions/fetchAll'
import { connect } from 'react-redux'
class Search extends Component {
 
    onChange=(e)=>{
        this.props.searchform(this.props.movies,e.target.value)
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
        text: state.movies.text,
        movies: state.movies.filtredItems,
       
     }
 }
export default connect(mapStateToProps,{searchform}) (Search);