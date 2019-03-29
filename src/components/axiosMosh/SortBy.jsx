import React, { Component } from "react";
class SortBy extends Component {
  state = {
    posts: [],
    direction: {
      key: "asc"
    }
  };

  //   key = () => {
  //         this.setState(this.props.key );
  //   };

  sortBy = key => {
    this.setState(this.props.posts);
    const data = this.state.posts;
    console.log(this.props.key);
    // console.log(data);
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  render() {
    return (
      <button onClick={() => this.sortBy("id")}>{this.props.title}</button>
    );
  }
}

export default SortBy;

// state = {
//   posts: [],
//   direction: {
//     key: "asc"
//   }
// };
// sortBy = key => {
//   const data = this.state.posts;
//   console.log(data);
//   this.setState({
//     data: data.sort((a, b) =>
//       this.state.direction[key] === "asc"
//         ? parseFloat(a[key]) - parseFloat(b[key])
//         : parseFloat(b[key]) - parseFloat(a[key])
//     ),
//     direction: {
//       [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
//     }
//   });
// };

// <th>
//   <button onClick={() => this.sortBy("id")}>Id</button>
// </th>;

// <td>{post.id}</td>
