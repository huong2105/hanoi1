import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";

function* getNewsDetail({ payload }) {
    // console.log();
    if(payload.ad === "homestay"){

        var params = "homstay"
    }
    else{
        var params = "posts"
    }
    console.log("params", params);
    try {
        const res = yield axios.get(`http://api-review.000webhostapp.com/wp-json/wp/v2/${params}?slug=${payload.slug}`)
        if (res.status === 200) {
            yield put(actions.getNewsDetailSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getNewsDetailFail(error))
    }
}

export function* watchingGetNewsDetail() {
    yield takeLatest(types.NEW_DETAIL, getNewsDetail)
}