import * as types from "./type";
import * as actions from "./action";
import axios from "axios";
import { put, takeLatest } from "@redux-saga/core/effects";
import { API_URL } from "../../utils";

function* getFeedBack({payload}) {
  if(payload.email && payload.status === "admin"){

    var params = ``
  } else if (payload.email){

    var params = `email=${payload.email}`
  }
  try {
    const res = yield axios.get(`${API_URL}/feedback/${params}`);
    
    if (res) {
      yield put(actions.getFeedBackSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.getFeedBackFail(error));
  }
}

export function* watchingGetFeedBack() {
  yield takeLatest(types.GET_FEED, getFeedBack);
}
