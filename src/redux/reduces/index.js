import { combineReducers } from "redux";
import counterReducer from "./counterReduces";

const reducers = combineReducers({
  counterReducer,
});

export default reducers