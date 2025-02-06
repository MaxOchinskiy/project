import React from "react";
import s from './Post.module.css'
import Like from "./Like/Like";



const Post = (props) => {
    console.log(props.message);
    return (<div>

            <div className={s.item}>
                <img
                    src='https://steamuserimages-a.akamaihd.net/ugc/2269319015243757481/C30C3DB5C97ACDFB2CA45BF49A79A348C4D3BD36/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
                {props.message}
                <Like/>
            </div>

        </div>


    )
}

export default Post;