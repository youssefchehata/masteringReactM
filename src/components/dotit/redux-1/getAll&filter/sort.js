import React, { Component } from 'react'
import { connect } from 'react-redux';
import {sortMoviesByPopularity} from './actions/fetchAll'
class Sort extends Component {
    state = {}
    render() { 
        return (  
            <div className="row">
                <div className="col">
                    <label>Order By</label>
                    <select className='form-control'value={this.props.sort}
                    onChange={e=>this.props.sortMoviesByPopularity(this.props.movies,e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="lowest">Lowest to highest</option>
                        <option value="heighest">Highst to lowest</option>
                    </select>
                </div>
            </div>
        )
    }
}
 const mapStateToProps = (state) => {
     return {
        movies: state.movies.items,
         sort:state.movies.sort
      
     }
 }
export default connect(mapStateToProps,{sortMoviesByPopularity}) (Sort);