import { authAPI } from '../api/api';
const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorAuth: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                errorAuth: action.payload,
            };

        default:
            return state;
    }
};

export const setError = (errorMessage) => {
    return {
        type: SET_ERROR,
        payload: errorMessage,
    };
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch)=>{
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
        let response= await authAPI.login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
                dispatch(setError(null));
            } else {
                const errorMessage = response.data.messages.length
                    ? response.data.messages[0]
                    : 'Some error occurred';

                dispatch(setError(errorMessage));
            }


};

export const logout = () => async (dispatch) => {
        let response= await authAPI.logout();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }

    };

export default authReducer;