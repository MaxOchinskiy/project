import {usersAPI} from "../api/api";

const addPost = 'addPost';
const updateNewPostText = 'updateNewPostText';
const SetUserProfile = 'setUserProfile';
let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?'},
        {id: 2, message: 'It`s my post!'},
        {id: 3, message: 'Yoooooooo'},
    ],
    newPostText: 'vk.com',
    profile: null,
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
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: addPost})
export const setUserProfile = (profile) => ({type: SetUserProfile, profile})
export const getUserProfile = (userId) =>(dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const updatePostTextActionCreator = (text) => (
    {type: updateNewPostText, newText: text})


export default profileReducer;