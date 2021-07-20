/* eslint-disable default-case */
import { listConstants } from "../actions/constants";

const initialState = {
    listing: [],
    loading: false,
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type){
        case listConstants.LIST_SUCCESS:
            state = {
                ...state,
                listing: action.payload.listing
            }
            break;
    }

    return state;
}