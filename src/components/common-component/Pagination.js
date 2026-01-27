function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <ul className="pagination">
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={currentPage !== 1 ? onPrev : undefined}
      >
        Prev
      </li>

      <li className="page-item active">
        Page {currentPage} of {totalPages}
      </li>

      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={currentPage !== totalPages ? onNext : undefined}
      >
        Next
      </li>
    </ul>
  );
}

export default Pagination;
// Explanation: Created a Pagination component that shows current page, total pages, and Prev/Next buttons.

// How it works
// Receives currentPage, totalPages, onPrev, onNext as props
// Disables Prev button on first page and Next button on last page
// Calls onPrev and onNext functions when buttons are clicked
                    