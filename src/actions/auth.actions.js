import axios from "../helpers/axios";
import { authConstants } from "./constants"

export const login = (user) => {
    console.log(user);
    return  async (dispatch) => {

        dispatch({type: authConstants.LOGIN_REQUEST});
        const res = await axios.post('/auth/login', {
            ...user

        });

         
        if(res.status){
            const {access_token, user} = res.data;
            localStorage.setItem('access_token', access_token);
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload: {
                    access_token, user
                }
            });
        }else{
            if(res.status === 401){
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {error: res.data.error}
                })
            }
        }

        
 
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const access_token = localStorage.getItem('access_token');
       
        if(access_token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    access_token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {

            localStorage.clear();
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        
        
    }
}