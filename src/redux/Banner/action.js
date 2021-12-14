import * as types from "./type"

export const getBanenr = (data) => ({

    type: types.GET_BANNER
})

export const getBanenrSucces = (data) => ({

    type: types.GET_BANNER_SUCCESS,
    payload: data
})

export const getBanenrFail = (data) => ({

    type: types.GET_BANNER_FAIL,
    payload: data
})