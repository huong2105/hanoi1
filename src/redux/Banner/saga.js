import * as types from "./type";
import * as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";

function * getBanner(){

    try {
        
        const res = yield axios.get(`http://localhost:5000/posts`)
        console.log("ress", res);
        if(res){

            yield put(actions.getBanenrSucces(res.data))
        }
    } catch (error) {
        yield put(actions.getBanenrFail(error))
    }   
}

export function * watchingGetBanner(){

    yield takeLatest(types.GET_BANNER, getBanner)
}