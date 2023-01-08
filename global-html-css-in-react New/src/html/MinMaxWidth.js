import React from 'react';
import styles from "../styles/minmaxwidth.module.css";
import { Link } from 'react-router-dom';
const MinMaxWidth = () => {
    return (
        <>
        <h3>
                <Link to="/">Home</Link>
            </h3>
            <div id={styles["div1"]}>

                <p>this is sample text</p>
                <p>this is sample text</p>
                <p>this is sample text</p>
                <p>this is sample text</p>
                <p>this is sample text</p>
            </div>
        </>
    );
};

export default MinMaxWidth;

