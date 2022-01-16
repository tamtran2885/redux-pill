import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import dashboardSearchReducer from "./dashboardSearch/reducer";

const reducers = combineReducers({
  dashboardSearch: dashboardSearchReducer,
  counter: counterReducer,
});

export default reducers;
