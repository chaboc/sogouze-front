//import {request} from './request';
import axios from "axios";
import { AsyncStorage, Platform } from "react-native"
import { ONGOING_MATCH, SUCCESS_MATCH, ERROR_MATCH, REMOVE_MATCH } from './const'
import GLOBAL from './global';

export function matchMatch() {

}

export function matchingList() {
  return {
    type: ONGOING_MATCH,
  }
}

export function matchingSuccess(data) {
  return {
    type: SUCCESS_MATCH,
    data,
  }
}

export function matchingError() {
  return {
    type: ERROR_MATCH
  }
}

export function matchRemove(id) {
  return {
    type: REMOVE_MATCH,
    idToRemove: id,
  }
}

export function getMatchList(data) {
  return (dispatch) => {
    dispatch(matchingList());
    console.log('JEAN', GLOBAL.BASE_URL + '/spotify/get_list_matching/' + data.user_id);
    axios.get(GLOBAL.BASE_URL + '/spotify/get_list_matching/' + data.user_id)
      .then(function (response) {
        console.log(response, 'JE SUIS UNE REPONSE');
        dispatch(matchingSuccess(response.data.data));
      })
      .catch(function (error) {
        console.log(error, 'dssdfsdffsddfsdfs');
      });
  }
}

export function actionMatch(data) {
  var action = data.action == 'like' ? true : false;
  console.log(GLOBAL.BASE_URL + '/spotify/match/' + data.user_id + '/' + data.match_id + '/' + action);
  return (dispatch) => {
    axios.post(GLOBAL.BASE_URL + '/spotify/match/' + data.user_id + '/' + data.match_id + '/' + action, {
    })
      .then(function (response) {
        console.log('JE SUIS LA RESPONSE', response);
        dispatch(matchRemove(response.data.id))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}