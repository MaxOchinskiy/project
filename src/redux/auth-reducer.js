import {authAPI} from "../api/api";

const SetUserData='setUserData';

let initialState ={
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetUserData:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
            default:
            return state;
    }
};
export const setAuthUserData=(userId,email,login) =>({type:SetUserData,data:userId,email,login});
export const getAuthUserData=()=>(dispatch)=>{
    authAPI.me()
        .then(response => {
            if(response.data.resultCode ===0){
                let{id,login,email}=response.data.data;
                dispatch(setAuthUserData(id,email,login));
            }
        });
}
export default authReducer;
