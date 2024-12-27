import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../Request/typing'
import { useDispatch } from 'react-redux';
import { addItem, CartItem, clearCart, loadCartItems, removeItem, } from './cartSlice';

interface ProductContextType {
    products: Product [] | null;
    loading: boolean;
}

const CartContext = createContext<ProductContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [isHydrated, setIsHydrated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isHydrated) {
            const storedCartItems = localStorage.getItem('cartItems');
            if (storedCartItems) {
                const items: CartItem[] = JSON.parse(storedCartItems);
                dispatch(loadCartItems(items));
            }
            setIsHydrated(true);
        }
    }, [dispatch, isHydrated]);
    

    return (
        <CartContext.Provider value={{ products, loading }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};
