import React, { Component } from 'react'
class Params extends Component {
    state = {}
    render() { 
        const {params}=this.props.match
        return ( 
            <div>
            <h3>nested: {params.id}</h3>

                <h1>hello man</h1>

          </div>
           
         )
    }
}
 
export default Params;