// import React, { Component } from "react";

// class SortBy extends Component {
//   state = {};
//   raiseSort = path => {
//     const sortColumn = { ...this.props.sortColumn };
//     if (sortColumn.path === path)
//       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//     else {
//       sortColumn.path = path;
//       sortColumn.order = "asc";
//     }
//     this.props.onSort(sortColumn);
//   };

//   render() {
//     return (
//       <div className="div">
//         <button
          
//           key={column.path || column.key}
//           onClick={() => this.raiseSort(column.path)}
//         >
//           {column.label} 
//         </button>
//       </div>
//     );
//   }
// }

// export default SortBy;
