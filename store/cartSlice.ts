import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface CartItem {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    quantity: number
}

interface CartState {
    items: CartItem[];
}

let initialItems: CartItem[] = [];
try {
    initialItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
} catch (error) {
    console.error("Failed to parse cart items from localStorage:", error);
}

const initialState: CartState = {
    items: initialItems,
};

const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            updateLocalStorage(state.items); // update local storage
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
            updateLocalStorage(state.items); // update local storage
        },
        // clearCart: (state) => {
        //     state.items = [];
        //     updateLocalStorage([]); // clear local storage
        // },
        clearCart: (state, action) => {
            const id = action.payload.id;
            state.items = state.items.filter(item => item.id !== id); // ลบแค่ item ที่มี id ตรงกับที่ส่งมา
            updateLocalStorage(state.items); // อัปเดต local storage ตามรายการที่เหลือ
        },
        loadCartItems: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
        },
    }
});
// export const getTotalCartItem = (state: { cart: CartState }) => {
//     return state.cart.items.reduce((total, item) => total + item.quantity, 0);
// };
export const {addItem,clearCart,removeItem,loadCartItems}=cartSlice.actions
export default cartSlice.reducer;