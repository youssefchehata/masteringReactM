import React, { Component } from 'react'
import {fetchpopularity} from './actions/fetchpopularity'
import { connect } from 'react-redux'
class Popularity extends Component {
    state = {}
    componentDidMount(){
        this.props.fetchpopularity()
    }
    render() { 
        // console.log('hhhh',this.props.pp);
    return ( <div>
        <ul>
            <li>{this.props.pp}</li>
        </ul>
    </div> )
    }
}
 const mapStateToProps = (state) => {
     return {
         pp: state.movies.popu
     }
 }
export default connect(mapStateToProps,{fetchpopularity}) (Popularity);