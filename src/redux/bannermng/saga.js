import * as types from "./type";
import * as actions from "./action";
import axios from "axios";
import { put, takeLatest } from "@redux-saga/core/effects";
import { API_URL } from "../../utils";

function* laydulieuBanner() {
  try {
    const res = yield axios.get(`${API_URL}/banner"`);
    if (res) {
      yield put(actions.layBannerThanhCong(res.data));
    }
  } catch (error) {
    yield put(actions.layBannerThatBai(error));
  }
}
function* postBanner({ payload }) {
  try {
    const res = yield axios.post(`${API_URL}/banner`, payload);
    if (res) {
      yield put(actions.postbannerthanhcong(res.data));
    }
  } catch (error) {
    yield put(actions.postbannerthatbai(error));
  }
}

function* deleteBanner({ payload }) {
  try {
    const res = yield axios.delete(
      `${API_URL}/banner/${payload._id}`
    );
    if (res) {
      yield put(actions.deletebannerthanhcong(payload._id));
    }
  } catch (error) {
    yield put(actions.deletebannerthatbai(error));
  }
}

export function* xemdulieuBanner() {
  yield takeLatest(types.GET_BANNER, laydulieuBanner);
  yield takeLatest(types.POST_BANNER, postBanner);
  yield takeLatest(types.DELETE_BANNER, deleteBanner);
}
