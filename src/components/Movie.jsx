import React, { Component } from "react";

class Movie extends Component {
  state = {};
  liked = () => {
    return (
      <button
        onClick={() => this.props.onclickLike(this.props.movie)}
        className="btn"
        style={{ cursor: "pointer" }}
      >
        {this.props.liked ? (
          <i className="fa fa-heart" aria-hidden="true" />
        ) : (
          <i  className="far fa-heart" aria-hidden="false" />
        )}
      </button>
    );
  };
  render() {
    // console.log(this.props.movie.liked);

    return (
      <tbody>
        <tr>
          <td> {this.props.movie.title}</td>
          <td>{this.props.movie.genre.name}</td>
          <td> {this.props.movie.numberInStock}</td>
          <td>{this.props.movie.dailyRentalRate}</td>
          <td>{this.liked()}</td>
          <td>
            <button
              onClick={() => this.props.handleDelete(this.props.movie._id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Movie;
