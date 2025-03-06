import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePhoto from '../../../assets/images/users.jpg';
import dashboardPhoto from '../../../assets/images/maxresdefault.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./PropfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto,saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
       saveProfile(formData);
       setEditMode(false);

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
                    src={profile.photos.large || defaultProfilePhoto}
                    alt="Avatar"
                    className={s.profilePhoto}
                />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                { editMode
                    ? <ProfileDataForm profile={profile} initialValues={profile}  onSubmit={onSubmit}/>
                    : <ProfileData  goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/> }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.profileDetails}>
                <h2>{profile.fullName}</h2>
                <p>{profile.aboutMe || "Информация о пользователе не указана."}</p>
            </div>
        </div>
    );
};
const ProfileData =({profile,isOwner,goToEditMode}) => {
    return <div>

        <div>
            <b>Полное Имя </b>:{profile.fullName}
        </div>
        <div>
            <b>Поиск работы</b>:{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Мои проффесиональные навыки</b>:{profile.lookingForAJobDiscription}
            </div>
        }
        <div>
            <b>Обо мне</b>:{profile.aboutMe}
        </div>
        <div>
            <b>Контакты</b>:{Object.keys(profile.contacts).map
        (key => {
            return <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
            />
        })}
        </div>
        {isOwner && <div><button onClick={goToEditMode} className={s.red}>Редактировать профиль</button></div>}
    </div>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
export default ProfileInfo;