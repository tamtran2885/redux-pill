import { SEARCH_PROPERTY, FETCH_PROPERTIES, FETCH_PROPERTY } from "./types";
import initialState from "./state";

const dashboardSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PROPERTY:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        loading: false,
      };
    case FETCH_PROPERTY:
      return {
        ...state,
        property: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default dashboardSearchReducer;
