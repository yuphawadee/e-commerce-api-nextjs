'use client'

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { Product } from '@/Request/typing';

const AddToCartButton = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        console.log("Adding to cart:", product);
        dispatch(addItem(product));
    };

    return (
        <button
            onClick={addToCartHandler}
            className='bg-black text-[#f4f4f4] rounded-lg py-3 w-full lg:w-1/4 mt-5 transition-transform active:scale-95 mb-3 hover:scale-105 duration-500'
        >
            Add To Cart
        </button>
    );
};

export default AddToCartButton;
