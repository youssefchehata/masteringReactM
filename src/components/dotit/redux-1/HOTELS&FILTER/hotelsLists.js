import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchListHotels} from './HOTELS&FILTER/actions/fetchListHotels'
import { Link } from 'react-router-dom';
import FilterByDropDown from './filterbydrpdown';
class HotelsList extends Component {
    state = {
        url: `http://voyage.wingygo.com:84/uploads/images/hotel_images/`
      };
componentDidMount(){
    this.props.fetchListHotels()
}
gethotel=()=>{
    return this.props.hotels.map(el=>{
    
   return(<div className="card m-3 " style={{width: "18rem",
   boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
<div className="shadow-lg">

    {el.photo_produit.slice(0,1).map(sub=>{
    return <img className="card-img-top" src={this.state.url+sub.file_name}
    alt=""/>
  })}




</div>
<div className="card-body  text-center">

<h5>categorie:{el.categorie}</h5>
    <h4 className="card-title"><strong><Link to="">{el.libelle_hotel}</Link></strong></h4>

<h1 className="rating  d-flex justify-content-center " style={{listStyleType: 'none',color:'#FFD700'}}>

{/* <Rating score={el.average_rating}/> */}

</h1>

<div className="card-text">{el.adresse}
</div>

<div className="card-footer">
<span className="float-left">49$</span>
<span className="float-right">

<Link to='' className="active" data-toggle="tooltip" data-placement="top" title="Added to Wishlist"><i className="fas fa-heart"></i></Link>
</span>
</div>

</div>
</div>
   ) 
    })
  }
    render() { 
        return <div className='container-fluid ' style={{ backgroundColor: '#EDEDED' }}>

        <div className=' row justify-content-center  '>
          <div className="col-sm-12"><FilterByDropDown/></div>
          <div className="col-sm-12">{this.gethotel()}</div>
        
        
        </div>
      </div>
    }
}
 const mapStateToProps = (state) => {
     return {
         hotels: state.hotels.filteredItems
     }
 }
export default connect(mapStateToProps,{fetchListHotels}) (HotelsList)
;