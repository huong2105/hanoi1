import { combineReducers } from "redux";
import { bannerReducer } from "./Banner/reducer"
import {dulieubanner} from "./bannermng/reducer"
import {ListReducer} from "./ListProduct/reducer"
import {newsDetailReducer} from "./NewsDetail/reducer"
import {FeedbackReducer} from "./FeedBack/reducer"
import {homestayReducer} from "./Homestay/reducer"

const rootReducer = combineReducers({
    
    bannerReducer,
    dulieubanner,
    ListReducer,
    newsDetailReducer,
    FeedbackReducer,
    homestayReducer
});

export default rootReducer;
