import React, { Component } from 'react'
import {filtrebydate} from './actions/fetchAll'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class DateP extends Component {
  // state = {
  //   startDate: new Date(),
    
  //   endDate: new Date()
  // };

  // handleChange = date => {
  //   this.setState({
  //     startDate: date,
  //     endDate:date
  //   });
  // };
//   <DatePicker
//   selected={this.state.startDate}
//   onChange={this.handleChange}
// />
    render() { 
        return (    <div> <>

            <DatePicker
            className='form-control'
              selected={this.props.startDate}
              // onChange={this.handleChange}
              
              onChange={date=>this.props.filtrebydate(this.props.startDate,this.props.endDate,date)}
              selectsStart
              startDate={this.props.startDate}
              endDate={this.props.endDate}
            />
            <DatePicker
             className='form-control'
              selected={this.props.endDate}
              // onChange={date => this.setState({ endDate: date })}
              onChange={date=>this.props.filtrebydate(this.props.endDate,this.props.startDate,date)}
              selectsEnd
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              minDate={this.props.startDate}
            />
          </>
      
            </div>    
        )
    }
}
 const mapStateToProps = (state) => {
   return {
    startDate: state.movies.startDate,
    endDate: state.movies.endDate,
   }
 }
export default connect(mapStateToProps,{filtrebydate}) (DateP);