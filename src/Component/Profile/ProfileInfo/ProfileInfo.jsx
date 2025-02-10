import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import defaultProfilePhoto from '../../../assets/images/users.jpg';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div className={s.profile}>
            <div className={s.dashboard}>
                <img
                    src='https://i.ytimg.com/vi/v4BCpE0BkvM/maxresdefault.jpg'
                    alt="Dashboard"
                />
                {/* Дашборд */}
            </div>

            <div className={s.avatar}>
                <img
                    src={props.profile.photos.large || defaultProfilePhoto}
                    alt="Avatar"
                    className={s.profilePhoto}
                />
                <ProfileStatus status={props.profile.status || "hello"} />
            </div>

            <div className={s.profileDetails}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe || "Информация о пользователе не указана."}</p>
            </div>

            <div className={s.buttons}>
                <button className={s.red}>Редактировать профиль</button>
                <button className={s.eshe}>Ещё...</button>
            </div>
        </div>
    );
};

export default ProfileInfo;