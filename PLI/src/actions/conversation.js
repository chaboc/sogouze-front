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