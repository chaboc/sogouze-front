//import {request} from './request';
import axios from "axios";
import {AsyncStorage,Platform} from "react-native"
import {ONGOING_CONVERSATION, SUCCESS_CONVERSATION, ERROR_CONVERSATION, REMOVE_CONVERSATION} from './const'
import GLOBAL from './global';

export function conversationList() {
  return {
    type: ONGOING_CONVERSATION,
  }
}

export function conversationSuccess(data) {
  return {
    type: SUCCESS_CONVERSATION,
    data,
  }
}

export function conversationError() {
  return {
    type: ERROR_CONVERSATION
  }
}

export function conversationRemove(id) {
  return {
    type: REMOVE_CONVERSATION,
    idToRemove: id,
  }
}

export function getConversationList(data) {
    return (dispatch) => {
        dispatch(conversationList());
        axios.get(GLOBAL.BASE_URL + '/conversations', {
            user_id: data.user_id
          })
          .then(function (response) {
            console.log(response);
            dispatch(conversationSuccess(response.data.data))
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}