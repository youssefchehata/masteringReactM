import React, { Component } from 'react'
import { connect } from 'react-redux';
import {filtredmoviesBYoriginal_language} from './actions/fetchAll'
class Filter extends Component {
    state = {}
    render() { 
        return (  
            <div className="row">
                <div className="col">
                    <label>Filter By</label>
                    <select className='form-control'
      onChange={(e)=>this.props.filtredmoviesBYoriginal_language(this.props.movies,e.target.value)}
                    >
                    <option value='en'>en</option>
                    <option value='cn'>cn</option>
                    <option value='ru'>ru</option>
           
                    </select>
                </div>
            </div>
        )
    }
}
 const mapStateToProps = (state) => {
     return {
        ysf: state.movies.items,
        movies: state.movies.filtredItems,
        original_language:state.movies.original_language
      
     }
 }
export default connect(mapStateToProps,{filtredmoviesBYoriginal_language}) (Filter);