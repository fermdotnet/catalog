import http from '../utils/http';
import {loadUser} from '../actions/user';

export function fetchLoadUser(){
    return function(dispatch) {
        return http.get('/user/me').then(
            user => dispatch(loadUser(user))
        )
    }
};

export function getHistory(){
    return http.get('/user/history');
};