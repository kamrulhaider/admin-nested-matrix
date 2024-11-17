/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <div>
      <ReactPaginate
        pageCount={pageCount} // Total number of pages
        pageRangeDisplayed={3} // Number of pages to display in the pagination bar
        marginPagesDisplayed={2} // Number of pages to display at the beginning and end
        onPageChange={handlePageChange}
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        containerClassName="flex items-center gap-2"
        pageClassName="pagination"
        breakClassName=""
        previousClassName="pagination"
        nextClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
