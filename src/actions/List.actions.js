import axios from "../helpers/axios";
import { listConstants } from "./constants";
//import { listConstants } from "./constants"

export const getlist = () => {
    return  async dispatch => {
        dispatch({type: listConstants.LIST_REQUEST});
        const res = await axios.get(`/calls`);
        console.log(res);
        
        if(res.status){
            const {nodes} = res.data;
            dispatch({
                type:listConstants.LIST_SUCCESS,
                payload: {listing:nodes}
            })
        }else{
            dispatch({
                type:listConstants.LIST_FAILURE,
                payload:res.data.error
            })
        }
    }
}
// export const list = (user) => {
//     console.log(user);
//     return  async (dispatch) => {

//         dispatch({type: listConstants.LIST_REQUEST});
//         const res = await axios.get(`/calls`);
//             console.log(res);
//             if (res.status) {
    
//                 const { nodes } = res.data;
    
//                 dispatch({
//                     type: listConstants.LIST_SUCCESS,
//                     payload: { categories: nodes }
//                 });
//             } else {
//                 dispatch({
//                     type: listConstants.LIST_FAILURE,
//                     payload: { error: res.data.error }
//                 });
//             }

        
 
//     }
// }