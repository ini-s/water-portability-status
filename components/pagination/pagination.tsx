import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { PaginationBox } from "../../styles/notifications.styles";

import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
} from "react-icons/fa";

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

  const updatePageRange = useCallback(
    (newPage: number) => {
      let startPage = Math.floor((newPage - 1) / 3) * 3 + 1;
      let endPage = Math.min(startPage + 2, noOfPages);
      setPageRange(
        Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
      );
    },
    [noOfPages]
  );

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
        {
          <li>
            <FaAngleDoubleLeft />
          </li> /*when clicked, setCurrentPage(1) */
        }
        <li onClick={handlePrevious}>
          <FaAngleLeft />
        </li>
        {pageRange.map((no) => (
          <li key={no} onClick={() => handlePageChange(no)}>
            {no}
          </li>
        ))}
        <li>1-{noOfPages}</li>
        <li onClick={handleNext}>
          <FaAngleRight />
        </li>
        {
          <li>
            <FaAngleDoubleRight />
          </li> /* when clicked, setCurrentPage(noOfPages) */
        }
      </ul>
    </PaginationBox>
  );
};

export default Pagination;
