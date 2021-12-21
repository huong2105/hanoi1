import * as types from "./type";
import * as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";

function * getHomestay(){

    try {
        
        const res = yield axios.get(`http://localhost:5000/homestay`)
        console.log("ress", res);
        if(res){

            yield put(actions.getHomestaySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getHomestayFail(error))
    }   
}

export function * watchingGetHomeStay(){

    yield takeLatest(types.GET_HOMESTAY, getHomestay)
}