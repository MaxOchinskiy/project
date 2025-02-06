import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {



    return (
        <div className={s.dialog}>
                <img src='https://steamuserimages-a.akamaihd.net/ugc/2269319015243757481/C30C3DB5C97ACDFB2CA45BF49A79A348C4D3BD36/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
             <div/>
            <div className={`${s.item} ${s.activeLink}`}>

                <NavLink className={navData => navData.isActive ? s.active : s.item}
                         to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>

    )


}
export default DialogsItem;