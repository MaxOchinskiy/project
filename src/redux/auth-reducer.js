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
                ...action.payload,

            };
            default:
            return state;
    }
};
export const setAuthUserData=(userId,email,login,isAuth) =>({type:SetUserData,payload:{userId,email,login,isAuth}});
export const getAuthUserData=()=>(dispatch)=>{
    authAPI.me()
        .then(response => {
            if(response.data.resultCode ===0){
                let{id,login,email}=response.data.data;
                dispatch(setAuthUserData(id,email,login,true));
            }
        });
}
export const login=(email,password,rememberMe)=>(dispatch)=>{
    authAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode ===0){
                dispatch(getAuthUserData())
            }
        });
}
export const logout=()=>(dispatch)=>{
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode ===0){
                dispatch(setAuthUserData(null,null,null,false));
            }
        });
}
export default authReducer;
