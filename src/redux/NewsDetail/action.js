import * as types from "./type"
export const getNewsDetail = (data) => ({
    type: types.NEW_DETAIL,
    payload: data
})

export const getNewsDetailSuccess = (data) => ({
    type: types.NEW_DETAIL_SUCCESS,
    payload: data
})

export const getNewsDetailFail = (data) => ({
    type: types.NEW_DETAIL_FAIL,
    payload: data
})