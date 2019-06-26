import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ posts, postsPerPage,handleClick,paginate}) => {

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
        <div>
           {pageNumbers.map(number => {
      return (
        <div class="pagination d-inline-flex">
          <ul className="page-item p-1  ">
            <li
              className="page-link"
              key={number}
              id={number}
              onClick={handleClick}
            // onClick={()=>paginate(number)}
            
            >
              {number}
            </li>
          </ul>
        </div>
      );
    })}
            
        </div>
    )
}

Pagination.propTypes = {
   

}

export default Pagination
