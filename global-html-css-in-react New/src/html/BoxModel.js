import React from 'react';
import styles from '../styles/boxmodel.module.css'
import { Link } from 'react-router-dom';
const BoxModel = () => {
    return (
        <>
        <h3>
                <Link to="/">Home</Link>
            </h3>
           <div id={styles["div1"]}> </div>
        </>
    );
};

export default BoxModel;