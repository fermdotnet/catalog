import http from '../utils/http';
import {loadProducts} from '../actions/products';

export function fetchLoadProducts(){
    return function(dispatch) {
        return http.get('/products').then(
            products => dispatch(loadProducts(products))
        )
    }
};

export function redeem(productId){
    return http.post('/redeem', {productId});
};