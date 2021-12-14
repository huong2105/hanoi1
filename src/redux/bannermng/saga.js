import *as types from "./type"
import *as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";

function* laydulieuBanner() {
    try {

        const res = yield axios.get("http://localhost:5000/banner")
        console.log("lấy dữ liệu banner", res);
        if (res) {

            yield put(actions.layBannerThanhCong(res.data))
        }
    } catch (error) {
        yield put(actions.layBannerThatBai(error))
    }
}
function* postBanner({ payload }) {

    try {

        const res = yield axios.post("http://localhost:5000/banner", payload)
        if (res) {

            yield put(actions.postbannerthanhcong(res.data))
        }

    } catch (error) {
        yield put(actions.postbannerthatbai(error))
    }
}

function* deleteBanner({ payload }) {
    console.log(`data trong saga `, payload._id );
    try {
        const res = yield axios.delete(`http://localhost:5000/banner/${payload._id}`)
        if (res) {
            yield put(actions.deletebannerthanhcong(payload._id))
        }
    } catch (error) {
        yield put(actions.deletebannerthatbai(error))

    }
}

export function* xemdulieuBanner() {
    yield takeLatest(types.GET_BANNER, laydulieuBanner)
    yield takeLatest(types.POST_BANNER, postBanner)
    yield takeLatest(types.DELETE_BANNER, deleteBanner)
}
