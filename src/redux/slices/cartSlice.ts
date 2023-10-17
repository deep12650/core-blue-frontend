import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    items: Array<CartItem>;
}

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        // Add more actions as needed
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
