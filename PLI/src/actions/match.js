//import {request} from './request';
import axios from "axios";
import {AsyncStorage,Platform} from "react-native"
import {ONGOING_MATCH, SUCCESS_MATCH, ERROR_MATCH, REMOVE_MATCH} from './const'
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
        axios.get(GLOBAL.BASE_URL + '/matchs', {
            user_id: data.user_id
          })
          .then(function (response) {
            console.log(response);
            dispatch(matchingSuccess(response.data.data))
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export function actionMatch(data) {
  return (dispatch) => {
      axios.post(GLOBAL.BASE_URL + '/match/action', {
          action: data.action,
          match_id: data.match_id,
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

//export function login(data)
//{
//    return (dispatch, getState) => {
//        let url = baseUrl + '/api/login'
//        return true
//        return request(url, data).then(function(data) {
//            if(data.code == 0) return Promise.reject(data.message)
//            if(data.code == 2) {
//                dispatch(setUser(data.user))
//                dispatch(initSession(data.user.username))
//            }
//            return Promise.resolve(data.code == 2)
//        }, (error) => {
//            return Promise.reject(error)
//        })
//    }
//}



export function fetchUser(){
    return async (dispatch, getState) => {
        let username = null
        try {
            username = await AsyncStorage.getItem('User:username');
        }
        catch(err) {
            console.log(err)
            return Promise.reject()
        }
        let url = baseUrl + '/api/fetch-user'
        if(username !== null) {
//            return request(url, { username }).then(function(data){
//                console.log(data);
//                if(data.code == 2) {
//                    return dispatch(setUser(data.user)).then(function(){
//                        dispatch(openSession(username))
//                        return Promise.resolve()
//                    });
//                }
//                return Promise.reject()
//            }, async (error) => {
//                console.log(error)
//                let user = null
//                try {
//                    user = JSON.parse(await AsyncStorage.getItem('User:data'));
//                }
//                catch(e) {
//                    console.log(e)
//                }
//                if(user !== null) return dispatch(setUser(user)).then(function(){
//                    dispatch(openSession(username))
//                    return Promise.resolve()
//                });
//                return Promise.reject()
//            })
            return Promise.resolve()
        }
        else {
            return Promise.reject()
        }
    }
}