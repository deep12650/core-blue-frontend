// src/store/actions/productActions.ts
import { GET_PAGINATED_PRODUCTS } from './typeActions';
import { Dispatch } from 'redux';


export const getPaginatedProducts = (products: any) => {
    return {
        type: GET_PAGINATED_PRODUCTS,
        payload: products,
    };
};
