import * as types from "./type";

const initialState = {
  dataBanner: [],
  postDataBanner: [],
  loading: false,
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BANNER:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BANNER_SUCCESS:
      return {
        ...state,
        ...{ dataBanner: action.payload, loading: false },
      };

    case types.GET_BANNER_FAIL:
      return {
        ...state,
        ...{ dataBanner: [], loading: false },
      };

    default:
      return state;
  }
};
