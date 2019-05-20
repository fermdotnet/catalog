import {LOAD_PRODUCTS} from './types';

export const loadProducts = (products) => {
    return {type: LOAD_PRODUCTS, products};
};
