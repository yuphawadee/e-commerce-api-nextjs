import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCartItems } from '@/store/cartSlice';

const CartLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const items = JSON.parse(storedCartItems);
            dispatch(loadCartItems(items));
        }
    }, [dispatch]);

    return null;
};

export default CartLoader;
