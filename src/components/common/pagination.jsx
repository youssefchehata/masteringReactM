import React from "react";
// import PropTypes from 'prop-types';
import _ from "lodash"; // npm i lodash@4.17.10

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  //   console.log(pagesCount)0.9=>Math.ceil()
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
// Pagination.PropTypes = {
//    itemsCount:PropTypes.number.isRequired,
//    pageSize:PropTypes.number.isRequired,
//    onPageChange:PropTypes.func.isRequired,
//    currentPage:PropTypes.number.isRequired
// };

export default Pagination;
