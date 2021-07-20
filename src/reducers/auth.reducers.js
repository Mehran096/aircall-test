import { authConstants } from "../actions/constants";

const initState = {
    access_token: null,
    user: null,
    authenticate: false,
    authenticating: false
};

const authReducers = (state=initState, action) => {

    console.log(action);
    // eslint-disable-next-line default-case
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                 ...state,
                 authenticating:true,
                 //authenticate:false
            }
            break;
            case authConstants.LOGIN_SUCCESS:
                state = {
                    ...state,
                    user: action.payload.user,
                    access_token: action.payload.access_token,
                    authenticate:true,
                    authenticating:false

                }
                break;
                case authConstants.LOGOUT_SUCCESS:
                    state = {
                        ...initState
                    }
                    break;
    }
    return state
}

export default authReducers;