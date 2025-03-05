import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userIdFromPath = +this.props.router.params.userId;
        let authorisedUserId = this.props.authorisedUserId;

        if (!userIdFromPath && authorisedUserId) {
            userIdFromPath = authorisedUserId;
        }

        if (userIdFromPath) {
            this.props.getUserProfile(userIdFromPath);
            this.props.getStatus(userIdFromPath);
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            isShowMyProfile: true
        };
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userId !== prevProps.router.params.userId)

        this.refreshProfile()
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        let userIdFromPath = +nextProps.router.params.userId;
        let authorisedUserId = nextProps.authorisedUserId;

        if (prevState.isShowMyProfile && (userIdFromPath === authorisedUserId || !userIdFromPath)) {
            return { isShowMyProfile: false };
        }

        return null;
    }

    render() {
        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={"/login"} />;
        }

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                authorisedUserId={this.props.authorisedUserId}
                savePhoto={this.props.savePhoto}
            />
        );
    }
}

function withRouter(Component) {
    return function (props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

const ProfileContainerCompose = compose(
    withRouter,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus,savePhoto })
)(ProfileContainer);

export default ProfileContainerCompose;
