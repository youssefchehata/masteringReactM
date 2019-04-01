import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DetailsTable from './detailTable';
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import _ from 'lodash';

import SearchBox from "./searchBox";
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
class ShowTable extends Component {
   state = {
    posts: [],
    
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

 async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleDelete = post => {
    const posts = this.state.posts.filter(m => m._id !== post.id);
    this.setState({ posts });

    deleteMovie(post.id);
  };

//   handleLike = movie => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

//   handleGenreSelect = genre => {
//     this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
//   };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
    //   selectedGenre,
    //   searchQuery,
      posts
    } = this.state;


    const sorted = _.orderBy( [sortColumn.path], [sortColumn.order]);

    const posts = paginate(sorted, currentPage, pageSize);

    return { totalCount:  data: posts };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: posts } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          {/* <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          /> */}
        </div>
        <div className="col">
          {/* <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link> */}
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <DetailsTable
            posts={posts}
            sortColumn={sortColumn}
            // onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}


export default ShowTable;
