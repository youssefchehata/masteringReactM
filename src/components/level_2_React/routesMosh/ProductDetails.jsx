import React, { Component } from 'react'
class ProductDetails extends Component {
    state = {}
    render() { 
        const {match}=this.props
        return ( 
               <div>
            ProductDetails ID:  {match.params.id}
         <button >save</button>
        </div>
         )
    }
}
 
export default ProductDetails;
