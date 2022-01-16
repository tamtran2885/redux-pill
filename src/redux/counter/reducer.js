import { INCREASE_COUNTER, DECREASE_COUNTER } from "./types";
import initialState from "./state";

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREASE_COUNTER) return state + 1;
  if (action.type === DECREASE_COUNTER) return state - 1;
  return state;
};

export default counterReducer;
