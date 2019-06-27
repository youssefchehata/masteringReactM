import React, { Component } from 'react';
import  axios  from 'axios';
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'jhon Doe',
      //   email: 'jdoe@gmail.com',
      //   phone: '555-555-555'
      // },
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  // componentDidMount(){
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/users`)
  //   .then(res=>{
  //     console.log(res);
  //     this.setState({contacts:res.data})
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }
  //  async componentDidMount() {
  //     const { data: contacts } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  //     this.setState({ contacts });
  //   }
  async componentDidMount() {
   const  res= await axios
   .get(`https://jsonplaceholder.typicode.com/users`)
   
   
      this.setState({contacts:res.data})
    
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
