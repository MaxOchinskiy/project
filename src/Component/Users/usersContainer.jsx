import {connect} from 'react-redux';
import {follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers} from '../../redux/users-reducer';
import React from 'react';
import Users from './users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getusers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        let{currentPage,pageSize}=this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        let{pageSize}=this.props;
        this.props.getUsers(pageNumber, pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged.bind(this)}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getusers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }))(UsersContainer)

