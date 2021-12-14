import *as types from "./type"

const dulieubandau = {

    data: [],
    loading: false
}

export const dulieubanner = (state = dulieubandau, action) => {
    switch (action.type) {
        case types.GET_BANNER:
            return {
                ...state,
                loading: true
            }
        case types.GET_BANNER_SUCCESS:
            return {
                ...state,
                ...{ data: action.payload, loading: false }
            }
        case types.GET_BANNER_FAIL:
            return {
                ...state,
                ...{ data: [], loading: false }
            }
        case types.POST_BANNER:
            return {
                ...state,
                loading: true
            }
        case types.POST_BANNER_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false
            }
        case types.POST_BANNER_FAIL:
            return {
                ...state,
                ...{ data: [], loading: false }
            }

        case types.DELETE_BANNER:
            return {
                ...state,
                loading: true
            }
        case types.DELETE_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter(item => item._id !== action.payload)
            }

        default: return state

    }
}
