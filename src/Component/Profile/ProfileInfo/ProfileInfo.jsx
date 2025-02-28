import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import defaultProfilePhoto from '../../../assets/images/users.jpg';
import dashboardPhoto from '../../../assets/images/maxresdefault.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div className={s.profile}>
            <div className={s.dashboard}>
                <img
                    src={dashboardPhoto}
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
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
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