import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../redux/features/authSlice";
import { searchTours } from "../redux/features/tourSlice";
import decode from "jwt-decode"


const Header = ({ socket }) => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("")
  const { user } = useSelector((state) => ({ ...state.auth }));
  const token = user?.token;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if(token){
    const decodedToken = decode(token)
    console.log(decodedToken.exp);
    if(decodedToken.exp * 1000 < new Date().getTime()){
      dispatch(setLogout());
    }
  }


  const handleLogout = () => {
    dispatch(setLogout());
    console.log(`dispatch(setLogout)`);
    navigate("/login");
    toast.success("Loggout Successfully");
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(search){
      dispatch(searchTours(search))
      navigate(`/tours/search?searchQuery=${search}`)
      setSearch("")
    }else{
      navigate("/")
    }
  }

  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
      <MDBContainer>
        <div
          onClick={() => navigate("/")}
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
        >
          Touropedia
        </div>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
          {user?.result?._id && (<h6 style={{ marginTop: "30px", marginLeft: "17px" }}>Logged in as : {user?.result?.name}</h6>)}
            <MDBNavbarItem>
              <p className="header-text" onClick={() => navigate("/")}>
                Home
              </p>
            </MDBNavbarItem>
            {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <p
                    className="header-text"
                    onClick={() => navigate("/addTour")}
                  >
                    Add Tour
                  </p>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <p
                    className="header-text"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </p>
                </MDBNavbarItem>
              </>
            )}
            {user?.result?._id ? (
              <>
                <MDBNavbarItem>
                  <p className="header-text" onClick={handleLogout}>
                    Logout
                  </p>
                </MDBNavbarItem>
              </>
            ) : (
              <MDBNavbarItem>
                <p className="header-text" onClick={() => navigate("/login")}>
                  Login
                </p>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
          <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              <input 
               type="text"
               className="form-control"
               placeholder="Search Tour"
               value={search}
               onChange={(e)=>setSearch(e.target.value)}
              />
              <div style={{marginTop:"5px", marginLeft:"5px"}}>
                <MDBIcon fas icon="search"/>
              </div>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
