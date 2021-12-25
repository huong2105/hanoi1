import * as types from "./type";
import * as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";
import { API_URL } from "../../utils";

function * getHomestay(){

    try {
        
        const res = yield axios.get(`${API_URL}/homestay`)
    
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