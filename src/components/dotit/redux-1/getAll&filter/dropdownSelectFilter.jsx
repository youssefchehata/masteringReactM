import React, { Component } from 'react'
import {filtreByvote_average} from './actions/fetchAll'
import { connect } from 'react-redux'
class DropDownSelectFilter extends Component {
  


    FilterByvote_average=()=>{

        return<select className='form-control'
        
       
         onChange={(e)=>this.props.filtreByvote_average(this.props.movies,e.target.value)}
        
         >
           <option value='6.7'>6.7</option>
           <option value='8.1'>8.1</option>
           <option value='5.9'>5.9</option>
           <option value='6.6'>6.6</option>
           <option value='7.2'>7.2</option>
           
          
        </select>
      }

    render() { 
        return ( <div>{this.FilterByvote_average()} </div> )
    }
}
 const mapStateToProps = (state) => {
     return {
        movies: state.movies.items,
         vote_average:state.movies.vote_average
     }
 }
export default connect(mapStateToProps,{filtreByvote_average}) (DropDownSelectFilter);