import React, {useState} from "react";
import s from './Like.module.css'



const Like = (props) => {
    console.log(props.message);
    const[count,setCount]=useState(0);
    const onclick =()=>{
        setCount(count+1)
    }

    return<div className={s.container}>
        <div>{count}</div>
    <button onClick={onclick} className={s.button}>
         &#10084;
    </button>
        {props.message}



</div>}


export default Like

