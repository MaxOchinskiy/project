import {profileAPI, usersAPI} from "../api/api";

const addPost = 'addPost';
const SetUserProfile = 'setUserProfile';
const SetStatus = 'setStatus';
const DeletePost = 'deletePost';
const SavePhotoSuccess= 'savePhoto';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?'},
        {id: 2, message: 'It`s my post!'},
        {id: 3, message: 'Yoooooooo'},
    ],
    profile: null,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: action.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SetUserProfile: {
            return {
                ...state,
                profile: action.profile,
            };

        }
        case DeletePost: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SetStatus: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SavePhotoSuccess: {
            return {
                ...state,
                profile:{...state.profile,photos:action.photos} ,
            };

        }
        default:
            return state;
    }
};
export const addPostActionCreator = (newPostText) => ({type: addPost, newPostText})
export const setUserProfile = (profile) => ({type: SetUserProfile, profile})
export const setStatus = (status) => ({type: SetStatus, status})
export const deletePost = (postId) => ({type: DeletePost, postId})
export const savePhotoSuccess = (photos) => ({type: SavePhotoSuccess, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch,getState) => {
    //
    //const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        //dispatch(getUserProfile(userId));
    }
};

export default profileReducer;