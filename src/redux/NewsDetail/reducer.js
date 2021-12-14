import * as types from "./type";

const initialState = {
    data: [],
    loading: false

};

export const newsDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NEW_DETAIL:
            return {
                ...state,
                loading: true
            }
        case types.NEW_DETAIL_SUCCESS:
            return {
                ...state,
                ...{
                    data: action.payload, loading: false
                }
            }
        case types.NEW_DETAIL_FAIL:
            return {
                ...state,
                ...{
                    data: [], loading: false
                }
            }
        default:
            return state
    }
};
