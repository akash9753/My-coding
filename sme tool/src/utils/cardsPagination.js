import Pagination from "react-bootstrap/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import getCardsIndexOption from "./reportPaginate";
const CardsPagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  goToPage,
  goToPrevPage,
  goToNextPage,
}) => {
  //   const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / postsPerPage);

  let maxOption;
  if (lastPage >= 5) {
    maxOption = 5;
  } else {
    maxOption = lastPage;
  }
  const pageNumbers = getCardsIndexOption(maxOption, currentPage, lastPage);
  if(lastPage > 5){
    pageNumbers.splice(-1)
  }

  return (
    <>
      {/* <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1 ? true : false}
          onClick={goToPrevPage}
        />
        {pageNumbers.map((number) => (
          <>
            <Pagination.Item
              active={currentPage === number ? true : false}
              onClick={() => goToPage(number)}
            >
              {number}
            </Pagination.Item>
          </>
        ))}
        <Pagination.Next
          disabled={lastPage === currentPage ? true : false}
          onClick={goToNextPage}
        />
      </Pagination> */}
      <div className="float-end">
        <button
          className="btn btn-default arrowFont"
          disabled={currentPage === 1 ? true : false}
          onClick={goToPrevPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <span>
          {pageNumbers?.map((item, i) => (
            <button
              className={`custom_btn ${currentPage === item ? "active" : ""}`}
              // active={currentPage === item ? true : false}
              onClick={() => goToPage(item)}
              key={i}
            >
              {item}
            </button>
          ))}
        </span>
        <button
          className="btn btn-default arrowFont"
          disabled={lastPage === currentPage ? true : false}
          onClick={goToNextPage}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default CardsPagination;
