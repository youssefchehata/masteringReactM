import React, { Component } from 'react'
class ProductDetails extends Component {
    state = {}
    submit=()=>{
        // this.props.history.push('/level_2_React/routesMosh/products')
        this.props.history.replace('/level_2_React/routesMosh/products')
    }
    render() { 
        const {match}=this.props
        return ( 
               <div>
            ProductDetails ID:  {match.params.id}
         <button onClick={this.submit}>save</button>
        </div>
         )
    }
}
 
export default ProductDetails;
