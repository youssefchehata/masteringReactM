import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from './config.json'
import http from "./services/httpService";

// const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
class httpMosh extends Component {
  state = {
    posts: []
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
      await http.delete(1+config.apiEndpoint + "/");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");

      this.setState({ posts: originalPosts });
    }
  };

  //  handleDelete = async post => {
  //     const originalPosts = this.state.posts;
  //     const posts = this.state.posts.filter(p => p.id !== post.id);
  //     this.setState({ posts });
  //     try {
  //       // await axios.delete(apiEndpoint + "/" + post.id);
  //       await axios.delete(apiEndpoint + "/");
  //       // throw new Error("");
  //     } catch (ex) {
  //       if (ex.response && ex.response.status === 404)
  //         alert("This post has already been deleted.");
  //       else {
  //         alert("An unexpected error occurred.");
  //       }
  //       this.setState({ posts: originalPosts });
  //     }
  //     // console.log("Delete", post);
  //   };
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
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
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
