import React from "react";
import "./project2.css";

const Project2 = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark " id="top_nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {/* <img src={require(./dog9.png)} alt="" className="img-fluid" /> */}
              <img
                src={require("./media/dog9.png")}
                alt="dog"
                className="img-fluid"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>

              <form className="d-flex" id="searchform">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  id="searchbox"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  id="searchbtn"
                >
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center" id="banner">
          <div className="col-md-6 col-11" id="bannertext">
            <h1>
              First I wanted to be <br />a veterinarian
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button type="button" className="btn" id="bannerbtn1">Contact Us</button>
            <button type="button" className="btn" id="bannerbtn2">Our Services</button>
          </div>
          <div className="col-md-4 d-none d-md-block" id="bannerimg">
            <img
              src={require("./media/dog1.png")}
              alt="dog"
              className="img-fluid"
            />
          </div>
        </div>
         
         <div className="row justify-content-center" id="service">
          <div className="col-md-5 col-11 " id="service-text">
            <h1>As a veterinarian and<br/>lover of animals.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.</p>
              <button type="button" className="btn" id="service-btn">Our Service</button>
          </div>
          <div className="col-md-5 " id="service-img">
          <img
              src={require("./media/dog2.png")}
              alt="dog"
              className="img-fluid"
            />
          </div>
         </div>


         {/* counter */}
         <div className="row justify-content-center" id="counter-section">
          <div className="col-md-3 text-center text-white mt-5 mb-3">
          <i className="bi bi-heart-half counter-icon"></i>
          <h3>
            +34793<br/>
            Happy Client
          </h3>
          </div>
          <div className="col-md-3 text-center text-white mt-5 mb-3">
          <i className="bi bi-building counter-icon"></i>
          <h3>+45382<br/>
          Department
          </h3>
          </div>
          <div className="col-md-3 text-center text-white mt-5 mb-3">
          <i className="bi bi-eyedropper counter-icon"></i>
          <h3>+54762<br/>
          Vaccinations
          </h3>
          </div>
         </div>

         {/* blog */}
         <div className="row justify-content-center" id="blog">
          <div className="col-12 text-center" >
            <h1 id="blog-title">Recent Posts</h1>
            <p id="blog-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
            Assumenda eveniet cum possium magnam
            </p>
          </div>
          
          <div className="col-md-3 col-11 mt-4">
          <img
              src={require("./media/dog13.jpeg")}
              alt="dog"
              className="img-fluid"
              
            />
            <div className="article-detail">
              <h4 className="article-title">As a veterinarian and lover of animals.</h4>
              <p className="article-date">JUNE 20, 2022</p>
              <p className="article-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit
                 Assumenda eveniet cum possium magnam</p>
              <p><a href="#" className="article-link">Read More+</a></p>
            </div>
          </div>

          <div className="col-md-3 col-11 mt-4">
          <img
              src={require("./media/dog14.jpeg")}
              alt="dog"
              className="img-fluid"
            />
            <div className="article-detail">
              <h4 className="article-title">As a veterinarian and lover of animals.</h4>
              <p className="article-date">JUNE 20, 2022</p>
              <p className="article-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit
                 Assumenda eveniet cum possium magnam</p>
              <p><a href="#" className="article-link">Read More+</a></p>
            </div>
          </div>
          <div className="col-md-3 col-11 mt-4">
          <img
              src={require("./media/dog15.jpeg")}
              alt="dog"
              className="img-fluid"
            />
            <div className="article-detail">
              <h4 className="article-title">As a veterinarian and lover of animals.</h4>
              <p className="article-date">JUNE 20, 2022</p>
              <p className="article-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit
                 Assumenda eveniet cum possium magnam</p>
              <p><a href="#" className="article-link">Read More+</a></p>
            </div>
          </div>
          </div>

           {/* Footer */}
           <div className="row justify-content-center text-white" id="footer">
            <div className="col-md-3 col-11">
              <h4>About</h4>
              <a href="">History</a><br/>
              <a href="">Our Team</a><br/>
              <a href="">Brand Guidelines</a><br/>
              <a href="">Terms and Condition</a><br/>
              <a href="">Privacy Policy</a><br/>
            </div>
            <div className="col-md-2 col-11">
              <h4>Services</h4>
              <a href="">How to Order</a><br/>
              <a href="">Our Products</a><br/>
              <a href="">Order Status</a><br/>
              <a href="">Promo</a><br/>
              <a href="">Payment Method</a><br/>
            </div>
            <div className="col-md-4 col-11 text-end">
              <h4>Title Here</h4>
              <p>Lorem ipsum dolor sit amet</p>
              <form action="" id="footer-form">
                <input type="text" id="footer-search-box" />
                <button type="submit" id="footer-search-submit"><i className="bi bi-cursor-fill"></i></button>
              </form>
              <i className="bi bi-instagram social-icon"></i>
              <i className="bi bi-facebook social-icon"></i>
              <i className="bi bi-twitter social-icon"></i>
              <i className="bi bi-whatsapp social-icon"></i>
            </div>
           </div>

         

        {/* container-fluid */}
      </div>
      
    </>
  );
};

export default Project2;

<i className="bi bi-instagram"></i>