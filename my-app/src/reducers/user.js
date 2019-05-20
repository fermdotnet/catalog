import {LOAD_USER} from '../actions/types';

const initialState = {
    userData: {}
};

const user = (state = initialState, action) => {
    // console.log({state, action});

    switch(action.type){
        case LOAD_USER:
            return {
                ...state,
                userData: action.user
            };
            break;
        default:
            return state;
    }
}

export default user;
