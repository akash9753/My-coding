import React from "react";
import styles from "../styles/position.module.css";
import { Link } from 'react-router-dom';
const PositionProperty = () => {
  return (
    <>
    <h3>
                <Link to="/">Home</Link>
            </h3>
      <div className={`${styles.rel}`}>
        <div id={styles["tv"]}>TV</div>
        <div id={styles["sofa"]}>Sofa</div>
        <div id={styles["fridge"]}>fridge</div>
      </div>

      <div id={styles["outer-div"]}>
        <div id={styles["div1"]}></div>
        <div id={styles["div2"]}></div>
        <div id={styles["div3"]}></div>

        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
      </div>

      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.{" "}
      </p>
    </>
  );
};

export default PositionProperty;
