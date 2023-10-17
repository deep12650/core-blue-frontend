import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    products: productReducer,
    // Add other reducers here if needed
});

export default rootReducer;
