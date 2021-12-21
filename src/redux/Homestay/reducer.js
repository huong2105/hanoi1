import * as types from "./type";

const initialState = {
  dataHomestay: [],
  loading: false,
};

export const homestayReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOMESTAY:
      return {
        ...state,
        loading: true,
      };
    case types.GET_HOMESTAY_SUCCESS:
      return {
        ...state,
        ...{ dataHomestay: action.payload, loading: false },
      };

    case types.GET_HOMESTAY_FAIL:
      return {
        ...state,
        ...{ dataHomestay: [], loading: false },
      };

    default:
      return state;
  }
};
