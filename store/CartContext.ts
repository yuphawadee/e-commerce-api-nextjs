// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { CartItem } from './cartSlice';

// interface CartContextType {
//     items: CartItem[];
//     loading: boolean;
//     addItem: (item: CartItem) => void;
//     removeItem: (id: number) => void;
//     clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | null>(null);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [items, setItems] = useState<CartItem[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const loadCartItems = () => {
//             try {
//                 const savedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
//                 setItems(savedItems);
//             } catch (error) {
//                 console.error("Failed to parse cart items from localStorage:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCartItems();
//     }, []);

//     const updateLocalStorage = (items: CartItem[]) => {
//         localStorage.setItem('cartItems', JSON.stringify(items));
//     };

//     const addItem = (item: CartItem) => {
//         setItems(prevItems => {
//             const existingItem = prevItems.find(i => i.id === item.id);
//             let newItems;
//             if (existingItem) {
//                 newItems = prevItems.map(i =>
//                     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//                 );
//             } else {
//                 newItems = [...prevItems, { ...item, quantity: 1 }];
//             }
//             updateLocalStorage(newItems); // อัปเดต localStorage ที่นี่
//             return newItems;
//         });
//     };

//     const removeItem = (id: number) => {
//         setItems(prevItems => {
//             const existingItem = prevItems.find(i => i.id === id);
//             let newItems;
//             if (existingItem && existingItem.quantity > 1) {
//                 newItems = prevItems.map(i =>
//                     i.id === id ? { ...i, quantity: i.quantity - 1 } : i
//                 );
//             } else {
//                 newItems = prevItems.filter(i => i.id !== id);
//             }
//             updateLocalStorage(newItems); // อัปเดต localStorage ที่นี่
//             return newItems;
//         });
//     };

//     const clearCart = () => {
//         setItems([]);
//         localStorage.removeItem('cartItems');
//     };

//     if (loading) {
//         return <div>Loading cart...</div>; 
//     }

//     return (
//         <CartContext.Provider value={{ items, loading, addItem, removeItem, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     )
// };

// export const useCartContext = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCartContext must be used within a CartProvider");
//     }
//     return context;
// };
