import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from 'redux-modal';
import drawer from "./drawer";


import matchReducer from "./MatchReducer";



export default combineReducers({
  match: matchReducer,
});
