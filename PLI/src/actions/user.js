//import {request} from './request';
import axios from "axios";
import { AsyncStorage, Platform } from "react-native"
import { ONGOING_MATCH, SUCCESS_MATCH, ERROR_MATCH, REMOVE_MATCH } from './const'
import GLOBAL from './global';

export function loginSpotify() {
  return (dispatch) => {
    axios.get(GLOBAL.BASE_URL + '/spotify/login', {
    })
    .then(function (response) {
      console.log('JE SUIS LA RESPONSE SPOTIFY', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}