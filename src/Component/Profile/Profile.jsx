import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./My post/Post/MyPostContainer";

const Profile = (props) => {
    return (<div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostContainer />
    </div>)
}
export default Profile;