import { combineReducers } from "redux";
import { bannerReducer } from "./Banner/reducer"
import {dulieubanner} from "./bannermng/reducer"
import {ListReducer} from "./ListProduct/reducer"
import {newsDetailReducer} from "./NewsDetail/reducer"

const rootReducer = combineReducers({
    
    bannerReducer,
    dulieubanner,
    ListReducer,
    newsDetailReducer
});

export default rootReducer;
