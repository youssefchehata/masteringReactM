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
    posts: [],
    sortColumn: { path: "title", order: "asc" },
    direction: {
      title: "asc"
    }
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
  onSort(sortKey) {
    const data = this.state.posts;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
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
    this.setState({ posts: arrayCopy });
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
              <th onClick={() => this.onSort("title")}>Title</th>

              <th>
                <button onClick={() => this.sort("id")}>Id</button>
              </th>
              <th>
                <button onClick={() => this.onSort("id")}>N°</button>
              </th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
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
