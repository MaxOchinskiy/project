import styles from "../../Users/users.module.css";
import preloader from "../../../assets/images/bouncing-circles.svg";
import React from "react";

let Preloader =(props)=> {
    return(
        <div className={styles.preloaderContainer}>
            <img className={styles.preloader} src={preloader} alt="Loading..."/>
        </div>
    );
}
export default Preloader;