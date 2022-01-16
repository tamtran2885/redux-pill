import { SEARCH_PROPERTY, SET_PROPERTIES_DATA } from "./types";
import initialState from "./state";

const dashboardSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PROPERTY:
      return {
        ...state,
        text: action.payload,
      };
    case SET_PROPERTIES_DATA:
      return {
        ...state,
        properties: action.payload.data,
      };
    default:
      return state;
  }
};

export default dashboardSearchReducer;
