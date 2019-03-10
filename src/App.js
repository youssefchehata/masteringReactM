import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import { getMovies } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';
import one from './components/one.jpeg';
// import Nav from './components/Nav';

class App extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: []
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = _id => {
    let movies = this.state.movies.filter(movie => movie._id !== _id);
    this.setState({ movies });
  };
  onclickLike = movie => {
    console.log(this.state.movies.indexOf(movie));
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    //  this.setState({liked:this.movies[0].liked = !this.movies.liked})
  };
  hadlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    //  console.log(this.state.currentPage)
    return (
      <main className="container">
        {/* <Nav /> */}

        {/* <p>Showing {this.state.movies.length} movies in the database.</p> */}
        <img src={one} alt="one" />
        <div className="starter-template">
          <span>
            {this.state.movies.length === 0 && 'there is no movies to show'}
          </span>

          <Movies
            movies={this.state.movies}
            handleDelete={this.handleDelete}
            onclickLike={this.onclickLike}
            liked={this.state.movies}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            itemsCount={this.state.movies.length}
            onPageChange={this.hadlePageChange}
            //  movies={this.state.movies}
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            handleGenreSelect={this.handleGenreSelect}
          />
        </div>
      </main>
    );
  }
}

export default App;
