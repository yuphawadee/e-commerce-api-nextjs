'use client';

import { RootState } from '@/store/store';
import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';

const TotalCartProduct = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    
    // ตรวจสอบว่า items ไม่เป็น undefined ก่อนจะใช้ reduce
    const totalQuantity = items ? items.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <div>
            {totalQuantity}
        </div>
    );
};

// ใช้ dynamic import หากต้องการ
export default dynamic(() => Promise.resolve(TotalCartProduct), {
    ssr: false, // ปิด SSR สำหรับคอมโพเนนต์นี้
});
