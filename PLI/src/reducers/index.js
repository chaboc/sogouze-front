import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from 'redux-modal';
import drawer from "./drawer";


import matchReducer from "./MatchReducer";
import conversationReducer from "./ConversationReducer";
import userReducer from "./UserReducer";



export default combineReducers({
  match: matchReducer,
  conversation: conversationReducer,
  user: userReducer,
});
