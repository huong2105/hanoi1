import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";

function* getNewsDetail({ payload }) {

    try {
        const res = yield axios.get(`https://api-review.000webhostapp.com/wp-json/wp/v2/posts?category=${payload}`)
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