import {profileAPI, usersAPI} from "../api/api";

const addPost = 'addPost';
const updateNewPostText = 'updateNewPostText';
const SetUserProfile = 'setUserProfile';
const SetStatus='setStatus';
let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?'},
        {id: 2, message: 'It`s my post!'},
        {id: 3, message: 'Yoooooooo'},
    ],
    newPostText: 'vk.com',
    profile: null,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case updateNewPostText: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SetUserProfile: {
            return {
                ...state,
                profile: action.profile,
            };

        }
        case SetStatus: {
            return {
                ...state,
                status: action.status,
            };

        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: addPost})
export const setUserProfile = (profile) => ({type: SetUserProfile, profile})
export const setStatus = (status) => ({type: SetStatus, status})
export const getUserProfile = (userId) =>(dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) =>(dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) =>(dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}
export const updatePostTextActionCreator = (text) => (
    {type: updateNewPostText, newText: text})


export default profileReducer;