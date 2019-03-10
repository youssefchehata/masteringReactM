import React, { Component } from "react";
import Movie from "./Movie";
import ListGroup from "./common/ListGroup";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
// import { genres } from "../services/fakeGenreService";
class Movies extends Component {
  state = {};
  Thead = () => {
    return (
      <thead>
        
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
      </thead>
    );
  };
  render() {
    // console.log(this.props.items);

    //for pagination
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedItem
    } = this.props;
    const filtered = selectedItem && selectedItem._id
      ? allMovies.filter(m => m.genre._id === selectedItem._id)
      : allMovies;
    // const movies = paginate(allMovies, currentPage, pageSize);
    const movies = paginate(filtered, currentPage, pageSize);
    
    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in the database.</p>
        <div className="row">
          <div className="col-3">
          
            <ListGroup
              items={this.props.items}
              selectedItem={this.props.selectedItem}
              // textProperty={"name"}
              // valueProperty={"_id"}
              handleGenreSelect={this.props.handleGenreSelect}
            />
          </div>
          <div className="col">
            <table className="table">
              {this.Thead()}
              {movies.map(movie => (
                <Movie
                  key={movie._id}
                  movie={movie}
                  handleDelete={this.props.handleDelete}
                  onclickLike={this.props.onclickLike}
                  liked={movie.liked}
                />
              ))}
            </table>
            <div>
              <Pagination
                // itemsCount={this.props.movies.length}
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.props.onPageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
