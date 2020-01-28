import React, { Component } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class DateP extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date,
      endDate:date
    });
  };
//   <DatePicker
//   selected={this.state.startDate}
//   onChange={this.handleChange}
// />
    render() { 
        return (    <div> <>

            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
            <DatePicker
              selected={this.state.endDate}
              onChange={date => this.setState({ endDate: date })}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
            />
          </>
      
            </div>    
        )
    }
}
 
export default DateP;