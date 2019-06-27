import React from 'react'

const AboutParams = (props) => {
    return (
        <div className="container">
           <h1>about Params</h1> 
            <h2>{props.match.params.id}</h2>
            <button className="btn btn-warning"
           onClick={()=>{props.history.push('/')}}>props.history.push
            
                back
            </button>

            
        </div>
    )
}
 
export default AboutParams;