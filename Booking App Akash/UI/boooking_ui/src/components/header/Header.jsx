import "./header.css";
import {
  faBed,
//   faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//   import { DateRange } from "react-date-range";
// import { useContext, useState } from "react";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  return (
    <div className="header">
      <div className="headerConatiner">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPerson} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? Its Genius</h1>
         <p className="headerDesc">
            Get rewarded for your travels unlock instant savings of 10% or more
            with a free lamabooking account. 
         </p>
         <button className="headerBtn">Sign in /Register</button>
      </div>
    </div>
  );
};

export default Header;
