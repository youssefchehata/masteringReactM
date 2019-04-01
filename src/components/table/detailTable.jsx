import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
// import Like from "./common/like";

class DetailsTable extends Component {
  columns = [
    // {
    //   path: "title",
    //   label: "Title",
    //   content: movie => <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    // },
    { path: "titel", label: "Title" },
    { path: "id", label: "Id" },
    
    // {
    //   key: "like",
    //   content: movie => (
    //     <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
    //   )
    // },
    {
      key: "delete",
      content: post => (
        <button
          onClick={() => this.props.onDelete(post)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { posts, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={posts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default DetailsTable;
