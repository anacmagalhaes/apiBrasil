import React from 'react'
import ReactPaginate from 'react-paginate';

export const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"px-2 text-[#B34DB2]"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex list-none outline-none mx-auto my-4 justify-center gap-2"
        pageClassName=""
        pageLinkClassName="border border-[#B34DB2] px-2.5 py-1.5 text-[#B34DB2] cursor-pointer"
        activeClassName=""
        activeLinkClassName="bg-[#B34DB2] border border-[#B34DB2] text-white outline-none"
        
        previousClassName=""
        previousLinkClassName="border border-[#B34DB2] px-2.5 py-1.5 text-[#B34DB2] cursor-pointer"
        nextClassName=""
        nextLinkClassName="border border-[#B34DB2] px-2.5 py-1.5 text-[#B34DB2] cursor-pointer"
      />
  )
}
