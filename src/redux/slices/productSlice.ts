import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    products: Product[];
}

interface Product {
    id: number;
    name: string;
    // Add other fields as needed
}

const initialState: ProductState = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
