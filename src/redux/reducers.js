import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
// import dashboardSearchReducer from "./dashboardSearch/reducer";
import homeSearchReducer from "./homeSearch/reducer";

const reducers = combineReducers({
  // dashboardSearch: dashboardSearchReducer,
  counter: counterReducer,
  homeSearch: homeSearchReducer,
});

export default reducers;
