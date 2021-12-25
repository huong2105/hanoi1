import * as types from "./type";
import * as actions from "./action";
import axios from "axios";
import { put, takeLatest } from "@redux-saga/core/effects";
import { API_URL } from "../../utils";

function* getListProduct({ payload }) {
  if (payload.ad === "homestay") {
    var params = `homstay`;
  } else {
    var params = `posts`;
  }
  console.log("params", params);
  try {
    const res = yield axios.get(
      `https://api-review.000webhostapp.com/wp-json/wp/v2/${params}?page=${payload.page}&per_page=${payload.perPage}`
    );

    if (res) {
      yield put(actions.getListProductSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.getListProductFail(error));
  }
}

function* getfilterProduct({ payload }) {
  // {payload} => payload : payload

  try {
    const res = yield axios.get(`${API_URL}/listproducts/${payload}`);
    if (res) {
      yield put(actions.filterListProductSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.filterListProductFail(error));
  }
}
export function* watchingGetListProduct() {
  yield takeLatest(types.GET_LIST_PRODUCT, getListProduct);
  yield takeLatest(types.GET_FILTER_LIST_PRODUCT, getfilterProduct);
}
