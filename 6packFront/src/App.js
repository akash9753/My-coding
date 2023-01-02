import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import "./App.css";
import Header from "./component/layout/header/Header.js";
import Footer from "./component/layout/footer/Footer.js";
import Home from "./component/home/Home.js";
function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Driod Sans", "chilanka"],
      },
    });
  });

  return (
    <>
      {/* <Router>
        
        <Routes>
        <Route exact path="/" component={Home} />
        </Routes>
       
      </Router> */}
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
