import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePhoto from '../../../assets/images/users.jpg';
import dashboardPhoto from '../../../assets/images/maxresdefault.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
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
                    src={profile.photos.large||defaultProfilePhoto}
                    alt="Avatar"
                    className={s.profilePhoto}

                />

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
            <div className={s.profileDetails}>
                <h2>{profile.fullName}</h2>
                <p>{profile.aboutMe || "Информация о пользователе не указана."}</p>
            </div>

            <div className={s.buttons}>
                <button className={s.red}>Редактировать профиль</button>
                <button className={s.eshe}>Ещё...</button>
            </div>
        </div>
    );
};

export default ProfileInfo;