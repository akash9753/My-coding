import React from "react";
import styles from "../styles/css.module.css";
import { Link } from 'react-router-dom';
const Css = () => {
  return (
    <>
    <h3>
                <Link to="/">Home</Link>
            </h3>
      <h1>Display Property</h1>
      <span>Text 1</span>
      <span>Text 2</span>

      <div id={styles["div1"]}>akash</div>
      <div id={styles["div2"]}>patel</div>





      <div id={styles["outer-div1"]}>
        <div id={styles["inner-div1"]}></div>
      </div>

      <div id={styles["outer-div2"]}>
      </div>

      <p id={styles["sample-para"]}>Smaple text</p>

      <p id={styles["sample-para2"]}>
        Commenting is one such practice that is often ignored by programmers,
        especially for codes that are written by multiple programmers. But
        remember, commenting is an important part of project you create. With
        proper comments and organised files its always easier for you or others
        to jump in and understand where things are at and how they work.{" "}
      </p>

      <div id={styles["logo-image-container"]}>

      </div>

      <p>Sample paragraph</p>
      <p>Sample paragraph</p>
      <p>Sample paragraph</p>
       

       <h1>Overflown</h1>
       <div id={styles["container"]}>
        <p>this is a sample documnet</p>
       </div>
      

      <h1>Gradient Effect</h1>
      <div id={styles["containerG"]}>
        
       </div>


       <h1>Link Related psedo Classes</h1>
       <div id={styles["containerLinkPseudo"]}>
        <p>Click <a href="https://www.google.com"
        target="_blank"> google </a> to search</p>
       </div>

       <h1>Learn about pseudo elements</h1>
       <p>Learn about pseudo elements</p>
       <p>Learn about pseudo elements</p>


       <h1>before and after psedo classes</h1>
       <p>Heading</p>
    </>

  
  );
};

export default Css;
