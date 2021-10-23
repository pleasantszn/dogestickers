/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
const Pagination = ({ stickersPerPage, totalStickers, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalStickers / stickersPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div className="page">
            <div className ="pagination-container">
                {/* <div class="pagination-arrow">
                    <span className="arr">&#8592;</span>
                    <span class="arrow-text">Previous</span> 
                </div> */}
                {pageNumbers.map(number => (
                    <div className ="pagination-number" key={number}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </div>
                ))}
               
                
                {/* <div class="pagination-arrow">
                 <span className="arr">	&#8594;</span>
                </div> */}
                </div>

            </div>
    )
}

export default Pagination
