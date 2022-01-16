import { combineReducers } from "redux";
import dashboardSearchReducer from "./dashboardSearch/reducer";

const CombinedReducers = combineReducers({
  dashboardSearch: dashboardSearchReducer,
});

export default CombinedReducers;
