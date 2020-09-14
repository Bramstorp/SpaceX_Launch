import React from 'react';

const Pagination = ({ planetsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / planetsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container">
      <ul className='pagination pt-4 pb-2'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;