import * as types from "./type"

export const getListProduct = (data) => ({
    type: types.GET_LIST_PRODUCT,
    payload: data
})
export const getListProductSuccess = (data) => ({
    type: types.GET_LIST_PRODUCT_SUCCESS,
    payload: data
})
export const getListProductFail = (data) => ({
    type: types.GET_LIST_PRODUCT_FAIL,
    payload: data
})


export const filterListProduct = (data) => ({

    type: types.GET_FILTER_LIST_PRODUCT,
    payload: data
})
export const filterListProductSuccess = (data) => ({
    type: types.GET_FILTER_LIST_PRODUCT_SUCCESS,
    payload: data
})
export const filterListProductFail = (data) => ({
    type: types.GET_FILTER_LIST_PRODUCT_FAIL,
    payload: data
})

export const wpGetListProduct = (data) => ({
    type: types.WP_GET_LIST_PRODUCT
})
export const wpGetListProductSuccess = (data) => ({
    type: types.WP_GET_LIST_PRODUCT_SUCCESS,
    payload: data
})
export const wpGetListProductFail = (data) => ({
    type: types.WP_GET_LIST_PRODUCT_FAIL,
    payload: data
})