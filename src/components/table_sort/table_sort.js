<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
=======
import React from "react";
import axios from "axios";
>>>>>>> 012df6578b742abf8320d0df5aa237f710810414
class Table_sort extends React.Component {
  state = {
    orderBy: '',
    orderAsc: true,
    dates: {
      maximum: '',
      minimum: ''
    },
    results: [
      {
        title: '',
        poster_path: '',
        popularity: '',
        release_date: ''
      }
    ],
    currentPage: 1,
    totlePage: 10
  };

  // movie/now_playing
  // movie/top_rated
  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'
      )
      .then(res => {
        // console.log(res);
        this.setState({
          dates: {
            minimum: res.data.dates.minimum,
            maximum: res.data.dates.maximum
          },
          results: res.data.results
        });
      });
  }
  compareBy = key => {
    const { orderAsc } = this.state;
    if (orderAsc) {
      return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    } else {
      return function(a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
  };

  sortBy = e => {
    const { results = [] } = this.state;
    const target = e.target;
    const id = target.id;
    let allIcon = Array.from(target.parentNode.querySelectorAll('i'));
    allIcon.map(item => {
      item.className = 'fas fa-sort ml-3';
    });
    let targetIcon = target.querySelector('i');
    if (this.state.orderAsc) {
      targetIcon.className = 'fas fa-caret-down ml-3';
    } else {
      targetIcon.className = 'fas fa-caret-up ml-3';
    }

    this.setState({
      currentPage: 1,
      orderBy: id,
      results: results.sort(this.compareBy(id)),
      orderAsc: !this.state.orderAsc
    });
  };
  prev = e => {
    const { currentPage } = this.state;
    if (currentPage == 1) return false;
    this.setState({
      currentPage: currentPage - 1
    });
  };
  next = e => {
    const { currentPage, totlePage, dates, results } = this.state;
    let totalPager = Math.ceil(results.length / totlePage);
    if (totalPager == currentPage) return false;
    this.setState({
      currentPage: currentPage + 1
    });
  };

  // search function
  keyUpHandle = (e, target) => {
    let input = document.querySelector('#inputS');
    let tables = document.querySelector('#tableS');
    let rows = tables.querySelector('tbody').rows;
    this.filter(input, rows);
  };
  filter = (input, rows) => {
    Array.from(rows).map(row => {
      const text = row.textContent.toLowerCase(),
        val = input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id)
    });
  };
  // Switch the number of pens

  pagesHandle = e => {
    const { results } = this.state;
    let showNums = Number(e.target.value);
    let dataLength = results.length;
    if (showNums > dataLength) {
      showNums = results.length;
    }
    this.setState({
      totlePage: showNums
    });
  };

  render() {
    const { results = [], dates = {}, totlePage, currentPage } = this.state;
    const indexOfLastTodo = currentPage * totlePage;
    const indexOfFirstTodo = indexOfLastTodo - totlePage;
    const currentTable = results.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTable = currentTable.map((val, idx) => {
      return (
        <tr className="row m-0">
          <td className="d-inline-block col-12 col-md-2">{val.release_date}</td>
          <td className="d-inline-block col-12 col-md-2">{val.title}</td>
          <td className="d-inline-block col-12 col-md-4">
            <img
              src={'https://image.tmdb.org/t/p/w500' + val.poster_path}
              className="img-fluid"
            />
          </td>
          <td className="d-inline-block col-12 col-md-2">{val.popularity}</td>
          <td className="d-inline-block col-12 col-md-2">{val.adult}</td>
        </tr>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(results.length / totlePage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li class={number == currentPage ? 'page-item active' : 'page-item'}>
          <a
<<<<<<< HEAD
            href="/"
            class="page-link"
=======
            className="page-link"
>>>>>>> 012df6578b742abf8320d0df5aa237f710810414
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </a>
        </li>
      );
    });

    return (
      <div>
        <div className="container">
          <header className="text-center mt-4">
            <h2>Recently released movies</h2>
            <p>
              Schedule: {dates.minimum} ～ {dates.maximum}
            </p>
          </header>

          <div className="row px-3">
            <div className="mr-auto row px-3">
              <div className="form-inline mr-3">
                <select
                  className="form-control"
                  name="state"
                  onChange={this.pagesHandle}
                >
                  <option value="5000">Show ALL Rows</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="form-inline">
                <input
                  placeholder="search"
                  id="inputS"
                  onKeyUp={e => this.keyUpHandle(e, 'name')}
                  className="form-control"
                />
              </div>
              <div className="d-flex align-items-center ml-3">
                {results.length <= 0
                  ? null
                  : `
                  Currently from ${indexOfFirstTodo + 1} ~ ${currentPage *
                      (totlePage > results.length
                        ? results.length
                        : totlePage)} 
                        Total ${results.length} pen`}
              </div>
            </div>

            <div className="ml-auto">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="/"
                      aria-label="Previous"
                      onClick={this.prev}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  {renderPageNumbers}
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="/"
                      aria-label="Next"
                      onClick={this.next}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <table id="tableS" class="table">
            <thead class="bg-primary text-white">
              <tr className="row m-0">
                <th
                  id="release_date"
                  className="d-inline-block col-12 col-md-2"
                  onClick={this.sortBy}
                >
                  date <i class="fas fa-sort ml-3" />
                </th>
                <th
                  id="overview"
                  className="d-inline-block col-12 col-md-2"
                  onClick={this.sortBy}
                >
                  Movie name <i class="fas fa-sort ml-3" />
                </th>
                <th
                  id="title"
                  className="d-inline-block col-12 col-md-4"
                  onClick={this.sortBy}
                >
                  Movie poster <i class="fas fa-sort ml-3" />
                </th>
                <th
                  id="popularity"
                  className="d-inline-block col-12 col-md-2"
                  onClick={this.sortBy}
                >
                  Popularity <i class="fas fa-sort ml-3" />
                </th>
                <th
                  id="adult"
                  className="d-inline-block col-12 col-md-2"
                  onClick={this.sortBy}
                >
                  adult
                  <i class="fas fa-sort ml-3" />
                </th>
              </tr>
            </thead>
            <tbody>{renderTable}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table_sort;
