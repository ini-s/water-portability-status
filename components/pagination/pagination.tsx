import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { PaginationBox } from "../../styles/notifications.styles";

const Pagination = ({
  size,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: {
  size: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) => {
  const noOfPages = Math.ceil(size / postsPerPage);
  const [pageRange, setPageRange] = useState<number[]>([]);

  const updatePageRange = (newPage: number) => {
    let startPage = Math.floor((newPage - 1) / 3) * 3 + 1;
    let endPage = Math.min(startPage + 2, noOfPages);
    setPageRange(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    );
  };

  const handlePageChange = (no: number) => {
    setCurrentPage(no);
    updatePageRange(no);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      updatePageRange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < noOfPages) {
      setCurrentPage(currentPage + 1);
      updatePageRange(currentPage + 1);
    }
  };

  useEffect(() => {
    updatePageRange(currentPage);
  }, [currentPage, updatePageRange, noOfPages]);

  return (
    <PaginationBox>
      <ul>
        {/* <li></li>  when clicked, setCurrentPage(1) */}
        <li onClick={handlePrevious}>P</li>
        {pageRange.map((no) => (
          <li key={no} onClick={() => handlePageChange(no)}>
            {no}
          </li>
        ))}
        <li>1-{noOfPages}</li>
        <li onClick={handleNext}>N</li>
        {/* <li></li>  when clicked, setCurrentPage(noOfPages) */}
      </ul>
    </PaginationBox>
  );
};

export default Pagination;
