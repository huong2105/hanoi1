import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { put, takeLatest } from "@redux-saga/core/effects";
function* wpGetListProduct({ payload }) {
    // console.log(payload);
    // try {
    //     const res = yield axios.get(`https://api-hanoi.000webhostapp.com/wp-json/wp/v2/posts`)
    //     console.log("res", res);
    //     if (res) {
    //         yield put(actions.wpGetListProductSuccess(res.data))
    //     }
    // } catch (error) {
    //     yield put(actions.wpGetListProductFail(error))
    // }
}

function* getListProduct({ payload }) {
  
    try {
        const res = yield axios.get(`http://api-review.000webhostapp.com/wp-json/wp/v2/posts`)
        if (res) {
            yield put(actions.getListProductSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getListProductFail(error))
    }
}

function* getfilterProduct({ payload }) { // {payload} => payload : payload

    try {
        const res = yield axios.get(`http://localhost:5000/listproducts/${payload}`)
        if (res) {
            yield put(actions.filterListProductSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.filterListProductFail(error))

    }
}
export function* watchingGetListProduct() {
    yield takeLatest(types.GET_LIST_PRODUCT, getListProduct)
    yield takeLatest(types.GET_FILTER_LIST_PRODUCT, getfilterProduct)
    yield takeLatest(types.WP_GET_LIST_PRODUCT, wpGetListProduct)
}
