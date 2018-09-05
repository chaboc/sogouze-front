import {request} from './request';
import {AsyncStorage,Platform} from "react-native"


export function register(data){
    return (dispatch, getState) => {
        let url = baseUrl + '/api/register'
        return request(url, data).then(function(data) {
            if(data.code == 1) {
                dispatch(setUser(data.user))
                dispatch(initSession(data.user.username))
                return Promise.resolve()
            }
            else {
                return Promise.reject(data.message)
            }
        }, (error) => {
            return Promise.reject(error)
        })
    }
}