import {LOAD_PRODUCTS} from '../actions/types';

const initialState = {
    products: []
};

const products = (state = initialState, action) => {
    // console.log({state, action});

    switch(action.type){
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        break;
        default:
            return state;
    }
}

export default products;
