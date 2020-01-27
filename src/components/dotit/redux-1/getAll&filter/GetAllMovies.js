import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {fetchAll}  from './actions/fetchAll';
import Sort from './sort'
import Filter from './filter'
import Search from './Search'
class GetAllMovies extends Component {
    state = {
       
    }
    componentDidMount(){
        this.props.fetchAll()
    }

renderTable =()=>{
  return  this.props.movies.map((val) => {
        return (
          <tr key={val.id} className="row m-0">
            <td className="d-inline-block col-12 col-md-2">{val.release_date}</td>
            <td className="d-inline-block col-12 col-md-2">{val.title}</td>
            <td className="d-inline-block col-12 col-md-4">
              <img alt=''
                src={'https://image.tmdb.org/t/p/w500' + val.poster_path}
                className="img-fluid"
              />
            </td>
            <td className="d-inline-block col-12 col-md-2">{val.popularity}</td>
            <td className="d-inline-block col-12 col-md-2">{val.adult}</td>
            <td className="d-inline-block col-12 col-md-2">{val.original_language}</td>
          </tr>
        );
      });
} 
 
    render() { 
        
        return ( 
        <div className='row'>
            <div className="col-sm-12"><Sort/></div>
            <div className="col-sm-12"><Filter/></div>
            <div className="col-sm-12"><Search/></div>
            <div className='col-sm-12'> {this.renderTable()}</div>
           
            </div>
         )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => {
        dispatch(fetchAll());
      }
    };
  };
  
 const mapStateToProps = (state) => {
    //  console.log("state",state);
     return {
        movies: state.movies.filtredItems
       
     }
 }
export default connect(mapStateToProps,mapDispatchToProps) (GetAllMovies);