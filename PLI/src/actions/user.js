//import {request} from './request';
import axios from "axios";
import { AsyncStorage, Platform } from "react-native"
import { ONGOING_USER, SUCCESS_USER, ERROR_USER } from './const'
import GLOBAL from './global';

export function ongoingUser() {
  return {
    type: ONGOING_USER,
  }
}

export function successUser(data) {
  return {
    type: SUCCESS_USER,
    data,
  }
}

export function errorUser() {
  return {
    type: ERROR_USER
  }
}

export function getUser(data) {
  return (dispatch) => {
    dispatch(ongoingUser());
    console.log('JEAN', GLOBAL.BASE_URL + '/user/' + data.user_id);
    axios.get(GLOBAL.BASE_URL + '/user/' + data.user_id)
      .then(function (response) {
        console.log(response, 'JE SUIS UNE REPONSE');
        dispatch(successUser(response.data.data));
      })
      .catch(function (error) {
        console.log(error, 'dssdfsdffsddfsdfs');
      });
  }
}