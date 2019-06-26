import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from './config.json';
import http from './services/httpService';

// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
// import _ from "lodash";

// import SortBy from './SortBy';
import axios from 'axios';
import Pagination from './pagination';
import PaginationTraversy from './paginationTraversy.jsx';

// const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
// rce
class httpMosh extends Component {
  state = {
    posts: [],
    // sortColumn: { path: "title", order: "asc" },
    direction: {
      title: 'asc'
    },
    orderBy: '',
    orderAsc: true,
    loading: false,
    currentPage: 1,
    postsPerPage: 10
  };
   // Change page
   paginate =(Number)=>  { this.setState({currentPage:Number})};
  handleClick = e => { this.setState({ currentPage: Number(e.target.id) }); };

  // async componentDidMount() {
  //   const { data: posts } = await http.get(config.apiEndpoint);
  //   this.setState({ posts });
  // }

  componentDidMount = () => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    axios
      .get(url)

      .then(res => {
        //  console.log(res.data);
        this.setState({ posts: res.data });
      })

      .catch(err => {
        // console.log(err);
        this.setState({ loading: !this.state.loading });
      });
  };

  handleAdd = async () => {
    // console.log('Add');
    const obj = { title: 'a', body: 'b' };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    //    console.log(post)
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    // console.log('Update', post);
    post.title = 'UPDATED';

    const { data } = await http.put(config.apiEndpoint + '/' + post.id, post);
    // http.patch(apiEndpoint + "/" + post.id, { title: post.title });
    const posts = [...this.state.posts];

    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
    console.log(data);
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      // await http.delete(apiEndpoint + "/" + post.id);
      await http.delete(config.apiEndpoint + '/');
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert('This post has already been deleted.');

      this.setState({ posts: originalPosts });
    }
  };
  // -----SortByNumber----------
  sortBy = key => {
    const data = this.state.posts;

    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    });
  };
  // -------sortByString---------------
  onSort = key => {
    const data = this.state.posts;

    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === 'asc'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    });
  };
  // --------sort by Num+string----
  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sort(key) {
    const arrayCopy = [...this.state.posts];
    arrayCopy.sort(this.compareBy(key));
    this.setState({
      posts: arrayCopy
    });
  }
  // ----------all sort---------------

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

  sorter = e => {
    // const results = this.state.posts
    const { posts = [] } = this.state;
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
      orderBy: id,
      posts: posts.sort(this.compareBy(id)),
      orderAsc: !this.state.orderAsc
    });
  };
  render() {
    //get current posts
    const { posts, currentPage, postsPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * postsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstTodo, indexOfLastTodo);
  
 
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div class="pagination d-inline-flex">
          <ul className="page-item p-1  ">
            <li
              className="page-link"
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          </ul>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div>
          <ul>{/* {renderTodos} */}</ul>
          {/* <ul id="page-numbers">{renderPageNumbers}</ul> */}
          <Pagination
            posts={posts}
            postsPerPage={postsPerPage}
            handleClick={this.handleClick}
            
          />
          <PaginationTraversy 
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={this.paginate}
          />
        </div>
        {/* {this.state.loading===true? <h1>Loading...</h1>:"hhh" } */}
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.loading.posts}
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th
                style={{ cursor: 'pointer' }}
                id="title"
                onClick={this.sorter}
              >
                sorter <i class="fas fa-sort ml-3" />
              </th>
              <th>
                <button onClick={() => this.onSort('title')}>onSort</button>
              </th>
              <th>
                <button onClick={() => this.sortBy('id')}>sortBy</button>
              </th>
              <th>
                <button onClick={() => this.sort('id')}>sort</button>
              </th>

              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.title}</td>
                <td>{post.id}</td>
                <td>{post.id}</td>

                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default httpMosh;
