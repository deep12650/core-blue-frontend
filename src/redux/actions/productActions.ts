// src/store/actions/productActions.ts
import { GET_PRODUCTS } from './typeActions';
import { Product } from '../types';

export const getProducts = (products: Product[]) => {
    return {
        type: GET_PRODUCTS,
        payload: products,
    };
};
