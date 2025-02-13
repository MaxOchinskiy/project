import {usersAPI} from "../api/api";

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
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case Unfollow:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
               dispatch(toggleFollowingProgress(false, userId))
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}
export default usersReducer;
