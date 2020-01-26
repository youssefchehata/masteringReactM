import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filtredmovies } from './actions/fetchAll';
class Filter extends Component {
  state = {};
  render() {
    // console.log('movies', this.props.movies);
    return (
      <div className='row'>
        <div className='col'>
          <label>Filter By</label>
          <select
            className='form-control'
            onChange={e => this.props.filtredmovies(this.props.fil_items, e.target.value) }
          >
            <option value=''>...</option>
            <option value='絕地戰警 FOR LIFE'>絕地戰警 FOR LIFE</option>
            <option value='STAR WARS：天行者的崛起'> STAR WARS：天行者的崛起 </option>
            <option value='她們'>"她們"</option>
          </select>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies.items,
    fil_items: state.movies.filtredItems,
    title: state.movies.title
  };
};
export default connect(mapStateToProps, { filtredmovies })(Filter);
