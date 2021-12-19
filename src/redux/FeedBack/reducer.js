import * as types from "./type";

const initialState = {
  dataFeedback: [],
  loading: false
};

export const FeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FEED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FEED_SUCCESS:
      return {
        ...state,
        ...{ dataFeedback: action.payload, loading: false },
      };

    case types.GET_FEED_FAIL:
      return {
        ...state,
        ...{ dataFeedback: [], loading: false },
      };

    default:
      return state;
  }
};
