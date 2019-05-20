import {LOAD_USER} from './types';

export const loadUser = (user) => {
    return {type: LOAD_USER, user};
};
