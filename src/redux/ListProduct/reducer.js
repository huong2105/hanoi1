import * as types from "./type";

const initialState = {
  wpdata:[],
  dataListProduct: [],
  datafilterListProduct: [],
  loading: false,
};

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WP_GET_LIST_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.WP_GET_LIST_PRODUCT_SUCCESS:
    
      return {
        ...state,
        ...{ wpdata: action.payload, loading: false },
      };

    case types.WP_GET_LIST_PRODUCT_FAIL:
      return {
        ...state,
        ...{ wpdata: [], loading: false },
      };
    case types.GET_LIST_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        ...{ dataListProduct: action.payload, loading: false },
      };

    case types.GET_LIST_PRODUCT_FAIL:
      return {
        ...state,
        ...{ dataListProduct: [], loading: false },
      };
    case types.GET_FILTER_LIST_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FILTER_LIST_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FILTER_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        ...{ datafilterListProduct: action.payload, loading: false },
      };

    case types.GET_FILTER_LIST_PRODUCT_FAIL:
      return {
        ...state,
        ...{ datafilterListProduct: [], loading: false },
      };

    default:
      return state;
  }
};
