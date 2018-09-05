import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from 'redux-modal';
import drawer from "./drawer";


import loginReducer from "./LoginReducer";



export default combineReducers({
  login: loginReducer,
});
