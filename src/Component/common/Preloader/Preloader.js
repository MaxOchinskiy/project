import styles from "../../Users/users.module.css";
import preloader from "../../../assets/images/bouncing-circles.svg";
import React from "react";
let Preloader =(props)=> {
    return<div className={styles.prelo}>
                <img src={preloader}/>
            </div>

}
export default Preloader;