import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../Component/utils/object-helpers";

const Follow= 'follow'
const Unfollow= 'unfollow'
const SetUsers ='setUsers'
const SetCurrentPage ='setCurrentPage'
const SetTotalUsersCount ='setTotalUsersCount'
const ToggleIsFetching ='toggleIsFetching'
const ToggleIsFollowingProgress ='toggleIsFollowingProgress'
let initialState ={
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: true})
            };
        case Unfollow:
            return {
                ...state, users: updateObjectInArray(state.users,action.userId,"id",{followed: false})
            };
        case SetUsers: {
            return {
                ...state, users: action.users
            }
        }
        case SetCurrentPage: {
            return {...state, currentPage: action.currentPage}
        }
        case SetTotalUsersCount: {
            return {...state, totalUsersCount: action.Count}
        }
        case ToggleIsFetching: {
            return {...state, isFetching: action.isFetching}
        }
        case ToggleIsFollowingProgress: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?[...state.followingInProgress,action.userId]
                    : state.followingInProgress.filter(id=>id !== action.userId)
                    }
        }
        default:
            return state;
    }
};
export const followSuccess = (userId) => ({type: Follow, userId})
export const unfollowSuccess = (userId) => ({type: Unfollow, userId})
export const setUsers = (users) => ({type: SetUsers, users})
export const setCurrentPage = (currentPage) => ({type: SetCurrentPage, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SetTotalUsersCount, Count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: ToggleIsFetching, isFetching})
export const toggleFollowingProgress=(isFetching,userId) => ({type: ToggleIsFollowingProgress, isFetching,userId})

export const getUsers = (currentPage,pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow=async (dispatch,userId,apiMethod,actionCreator)=>{
    dispatch(toggleFollowingProgress(true, userId));
    let response=await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId) => {
    return  async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess);
    }
}
export default usersReducer;
