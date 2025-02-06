import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.profile}>
        <div>
            <img src='https://i.ytimg.com/vi/v4BCpE0BkvM/maxresdefault.jpg'/>
            {/*дашборд*/}
        </div>
        <div className={s.avatar}>
            <img src='https://steamuserimages-a.akamaihd.net/ugc/2269319015243757481/C30C3DB5C97ACDFB2CA45BF49A79A348C4D3BD36/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
        </div>
        <div className={s.avatar}><img src={props.profile.photos.large}/></div>
        <div>
            <button className={s.red}>Редактировать профиль</button>
        </div>
        <div>
            <button className={s.eshe}>Ещё...</button>
        </div>


    </div>
}


export default ProfileInfo;