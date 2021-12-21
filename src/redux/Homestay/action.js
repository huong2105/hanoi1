import * as types from "./type"

export const getHomestay = (data) => ({

    type : types.GET_HOMESTAY,
    payload: data
})

export const getHomestaySuccess = (data) => ({

    type : types.GET_HOMESTAY_SUCCESS,
    payload: data
})

export const getHomestayFail = (data) => ({

    type : types.GET_HOMESTAY_FAIL,
    payload: data
})