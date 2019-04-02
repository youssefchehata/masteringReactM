import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "./config.json";
import http from "./services/httpService";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
// import _ from "lodash";

// import SortBy from './SortBy';

// const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
// rce
class httpMosh extends Component {
  state = {
    posts: [{date:22/10/2014},
    ],
    sortColumn: { path: "title", order: "asc" },
    direction: {
      title: "asc"
    },
    orderBy: "",
      orderAsc: true,
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    // console.log('Add');
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    //    console.log(post)
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    // console.log('Update', post);
    post.title = "UPDATED";

    const { data } = await http.put(config.apiEndpoint + "/" + post.id, post);
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
      await http.delete(config.apiEndpoint + "/");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");

      this.setState({ posts: originalPosts });
    }
  };
  // -----SortByNumber----------
  sortBy = key => {
    const data = this.state.posts;

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
  // -------sortByString---------------
  onSort=(key) =>{
    const data = this.state.posts;

        this.setState({
     data: data.sort((a, b) => 
       this.state.direction[key] === "asc"
    ? a[key].localeCompare(b[key])
    :b[key].localeCompare(a[key])
    ),
    direction: {
      [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
    }
    });
  }
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
  // -------------------------
  compareBy=(key) =>{
    const { orderAsc } = this.state;
    if (orderAsc) {
      return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }else {
      return function(a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
  }

  sorter=(e)=> {
    // const results = this.state.posts
    const { results = [] } = this.state.posts;
    const target = e.target;
    const id = target.id;
    let allIcon = Array.from(target.parentNode.querySelectorAll("i"));
    allIcon.map(item => {
      
      item.className = "fas fa-sort ml-3";
    });
    let targetIcon = target.querySelector("i");
    if (this.state.orderAsc) {
      targetIcon.className = "fas fa-caret-down ml-3";
    } else {
      targetIcon.className = "fas fa-caret-up ml-3";
    }

    this.setState({
      currentPage: 1,
      orderBy: id,
      results: results.sort(this.compareBy(id)),
      orderAsc: !this.state.orderAsc
    });
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.onSort("title")}>onSort</th>
              <th id="title" onClick={(e) => this.sorter(e)}>sorter</th>
              <th>
                <button onClick={() => this.sortBy("id")}>sortBy</button>
              </th>
              <th>
                <button onClick={() => this.sort("id")}>sort</button>
              </th>
              <th>
                <button onClick={() => this.onSort("id")}>N°</button>
              </th>
              <th>
                <button onClick={() => this.onSort("date")}>date</button>
              </th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.title}</td>
                <td>{post.id}</td>
                <td>{post.id}</td>
                <td>{post.id}</td>
                <td>{post.date}</td>
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
