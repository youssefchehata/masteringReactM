import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filtredhotelsBYCATEGORIE} from '../HOTELS&FILTER/HOTELS&FILTER/actions/fetchListHotels'

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
    state = {}
    render() { 
    return ( <div>{this.FilterByCatigorie()}</div> )
    }
}
 const mapStateToProps = (state, ownProps) => {
   return {
     hotels: state.hotels.items,
     categorie:state.categorie
   }
 }
export default connect(mapStateToProps,{filtredhotelsBYCATEGORIE}) (FilterByDropDown);