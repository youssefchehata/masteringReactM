// import React, { Component } from 'react';

// class SortBy extends Component {
 
//   state = {
//     data:this.props.data,
//     direction: {
//       key: 'asc'
//     }
//   };
  
//   sortBy = key => {
//     const data = this.state.data;
//     this.setState({
//       data: data.sort((a, b) =>
//         this.state.direction[key] === 'asc'
//           ? parseFloat(a[key]) - parseFloat(b[key])
//           : parseFloat(b[key]) - parseFloat(a[key])
//       ),
//       direction: {
//         [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
//       }
//     });
//   };

//   render() {
//     console.log(this.props.data);
//     return (
//       <div className="div">
//         <button onClick={() => this.sortBy('id')}>Id</button>
//       </div>
//     );
//   }
// }

// export default SortBy;
