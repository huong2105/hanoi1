import * as types from "./type";

export const getFeedBack = (data) => ({
  type: types.GET_FEED,
  payload : data
});

export const getFeedBackSuccess = (data) => ({
  type: types.GET_FEED_SUCCESS,
  payload: data,
});

export const getFeedBackFail = (data) => ({
  type: types.GET_FEED_FAIL,
  payload: data,
});
