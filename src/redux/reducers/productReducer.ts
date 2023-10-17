import { GET_PRODUCTS } from '../actions/typeActions';
import { Product } from '../types';

type ProductState = {
    products: Product[];
};

const initialState: ProductState = {
    products: [],
};

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
