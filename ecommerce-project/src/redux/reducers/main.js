// combine all the reducer here and then send to store 

import { combineReducers } from "redux";
import { cartreducer } from "./reducer";

const rootreducer = combineReducers({
    cartreducer
})


export default rootreducer;