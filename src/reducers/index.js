 import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import List from "./List.reducers";

 const rootReducers = combineReducers({
     auth: authReducers,
     List: List

 })

 export default rootReducers;