import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getTours, setCurrentPage } from "../redux/features/tourSlice";
// import CardTour from "../components/CardTour";
// import Spinner from "../components/Spinner";
// import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import CardTour from "../components/CardTour";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
// import PopularTags from "../components/PopularTags";
// import Categories from "../components/Categories";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const { tours, loading,currentPage,numberOfPages } = useSelector((state) => ({
    ...state.tour,
  }));

  
  useEffect(() => {
    dispatch(getTours(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  
  
  console.log(tours);

  

  if(loading) {
    return <Spinner/>
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1400px",
        alignContent: "center",
      }}
    >
      <MDBRow className="mt-5">
        {tours.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        )}

        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {tours && tours.map((item, index) => 
                <CardTour key={item._id} {...item} />
              )}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      <Pagination 
       setCurrentPage={setCurrentPage}
       numberOfPages={numberOfPages}
       currentPage={currentPage}
       dispatch={dispatch}
      />
    </div>
  );
};

export default Home;
