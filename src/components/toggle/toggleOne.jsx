import React, { Component } from 'react';
import axios from 'axios';
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
class ToggleOne extends Component {
  state = {
    posts: [],
    showContent: true
  };
  toggleContent = e => {
    this.setState({ showContent: !this.state.showContent });
  };
  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }
  // componentDidMount=()=>{
  //   this.fetch(this.props)
  // }
  // async fetch(props){
  //   let res = await
  // }
  handleUpdate = async post => {
      // console.log('Update', post);
      post.title = "UPDATED";
  
      const { data } = await axios.put(apiEndpoint + "/" + post.id, post);
      // axios.patch(apiEndpoint + "/" + post.id, { title: post.title });
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
        // await axios.delete(apiEndpoint + "/" + post.id);
        await axios.delete(apiEndpoint + "/");
        // throw new Error("");
      } catch (ex) {
        if (ex.response && ex.response.status === 404)
          alert("This post has already been deleted.");
        else {
          alert("An unexpected error occurred.");
        }
        this.setState({ posts: originalPosts });
      }
      // console.log("Delete", post);
    };
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        toggelone
        <div>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.id}</td>
              <td>
                <button className="btn btn-info btn-sm" onClick={() => this.handleUpdate(post)} > Update </button>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(post)} > Delete </button>
              </td>
            </tr>
          ))}
        </div>
      </div>
    );
  }
}

export default ToggleOne;
