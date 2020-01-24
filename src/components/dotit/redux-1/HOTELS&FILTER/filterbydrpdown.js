import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filtredhotelsBYCATEGORIE,sortMovies} from '../HOTELS&FILTER/HOTELS&FILTER/actions/fetchListHotels'



class FilterByDropDown extends Component {
    FilterByCatigorie=()=>{

        return<select className='form-control'
        
       
         onChange={(e)=>this.props.filtredhotelsBYCATEGORIE(this.props.hotels,e.target.value)}
        
         >
           <option value='1'>1</option>
           <option value='2'>2</option>
           <option value='3'>3</option>
           <option value='4'>4</option>
           <option value='5'>5</option>
           
          
        </select>
      }
    sort=()=>{

        return<select className='form-control'
       onChange={(e)=>this.props.sortMovies(this.props.items,e.target.value)}
        >
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="heighest">Highst to lowest</option>
        </select>
      }
    state = {}
    render() { 
    return ( <div className="row">
        <div>{this.sort()}</div>
        <div>{this.FilterByCatigorie()}</div>
    </div>
   )
    }
}
 const mapStateToProps = (state, ownProps) => {
   return {
     hotels: state.hotels.items,
       categorie:state.categorie,
       items: state.hotels.filteredItems,
       sort:state.sort
   }
 }
export default connect(mapStateToProps,{filtredhotelsBYCATEGORIE,sortMovies}) (FilterByDropDown);