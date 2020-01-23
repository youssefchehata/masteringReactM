import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {fetchAll}  from './actions/fetchAll';

class GetAllMovies extends Component {
    state = {
       
    }
    componentDidMount(){
        this.props.fetchAll()
    }

renderTable =()=>{
  return  this.props.movies.map((val, idx) => {
        return (
          <tr className="row m-0">
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
          </tr>
        );
      });
} 
 
    render() { 
        
        return ( 
        <div>
            
            <div> {this.renderTable()}</div>
           
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
        movies: state.movies.ListOfMovies
       
     }
 }
export default connect(mapStateToProps,mapDispatchToProps) (GetAllMovies);