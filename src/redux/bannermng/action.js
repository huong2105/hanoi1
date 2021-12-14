import * as types from "./type"

export const laybanner = () => ({
    type: types.GET_BANNER
})
export const layBannerThanhCong = (data) => ({
    type: types.GET_BANNER_SUCCESS,
    payload: data
})
export const layBannerThatBai = (data) => ({
    type: types.GET_BANNER_FAIL,
    payload: data
})

// 
export const postbanner = (data) => (
    {
    type: types.POST_BANNER,
    payload: data

})
export const postbannerthanhcong = (data) => ({
    type: types.POST_BANNER_SUCCESS,
    payload: data
})
export const postbannerthatbai = (data) => ({
    type: types.POST_BANNER_FAIL,
    payload: data
})

// 
export const deletebanner = (data) => (
    
    console.log("data trong action", data), {
    type:types.DELETE_BANNER,
    payload: data 
})
export const deletebannerthanhcong = (data) => ({
    type:types.DELETE_BANNER_SUCCESS,
    payload: data 
})
export const deletebannerthatbai = (data) => ({
    type:types.DELETE_BANNER_FAIL,
    payload: data 
})
