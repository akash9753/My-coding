import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2>Click on Link to view Topic</h2>
      <div>
      <ul >
        <li>
          <Link to="/proptypesChecking">ProptypesChecking</Link>
        </li>
        <li>
          <Link to="/homecrud">CrudApp</Link>
        </li>
        <li>
          <Link to="/usestate">useState Hook</Link>
        </li>
        <li>
          <Link to="/useeffect">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/usememo">useMemo Hook</Link>
        </li>
        <li>
          <Link to="/usecallback">useCallback Hook</Link>
        </li>
        <li>
          <Link to="/react-table">React Table</Link>
        </li>
        <li>
          <Link to="/sort-table">Sort Table</Link>
        </li>
        <li>
          <Link to="/filter-table">Filter Table</Link>
        </li>
        <li>
          <Link to="/pagination-table">Pagination Table</Link>
        </li>
        <li>
          <Link to="/action-crud">Action Crud</Link> 
        </li>
        <li>
          <Link to="/react-table-home">React Table Home</Link>
        </li>
        <li>
          <Link to="/popup">Custom Popup</Link>
        </li>
        <li>
          <Link to="/responsiveness">Responsiveness</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
        <li>
          <Link to="/popupUserAccountMenu">PopupUserAccountMenu</Link>
        </li>
        <li>
          <Link to="/jsdom1">JSDom1</Link>
        </li>
        <li>
          <Link to="/window_object">Window Object in javascript</Link>
        </li>
        <li>
          <Link to="/EventHanderler">EventHanderler</Link>
        </li>
        <li>
        <Link to="/switch">switch</Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Home;