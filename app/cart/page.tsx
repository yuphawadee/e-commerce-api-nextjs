'use client';

import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addItem, CartItem, clearCart, loadCartItems, removeItem, } from '@/store/cartSlice';
import { MinusIcon, Plus, X } from 'lucide-react';

const Cart = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.cart.items);
    const [isHydrated, setIsHydrated] = useState(false);
    const [shippingCost, setShippingCost] = useState(0);
    const [selectedShipping, setSelectedShipping] = useState(0);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const items: CartItem[] = JSON.parse(storedCartItems);
            dispatch(loadCartItems(items));
        }
        setIsHydrated(true); // Set hydrated state
    }, [dispatch]);

    useEffect(() => {
        setShippingCost(0); // ตั้งค่า default shipping เป็น Free shipping
        // setBgColor('bg-green-100'); // เปลี่ยนสี background เริ่มต้นเมื่อ component ถูก mount
    }, []); // เรียกใช้แค่ครั้งเดียวเมื่อ component mount

    if (!isHydrated) return null; // Return null until hydrated

    const subTotal = () => {
        return product.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTotal = () => {
        // คำนวณยอดรวมจากราคาสินค้า
        const productTotal = product.reduce((total, item) => total + item.price * item.quantity, 0);
        // รวมยอดรวมสินค้าและค่าขนส่ง
        const totalWithShipping = productTotal + shippingCost;
        // คำนวณยอดรวมหลังจากลดราคา
        const finalTotal = totalWithShipping - discount;
        return finalTotal; // คืนค่ายอดรวมสุดท้าย
    };

    const handleShippingChange = (cost: number, bg: string) => {
        setShippingCost(cost);
        setSelectedShipping(cost); // อัปเดตค่าที่เลือก
    };

    const handleApplyCoupon = () => {
        if (couponCode === 'SAVE10') {
            const discountAmount = calculateTotal() * 0.10; // ลด 10%
            setDiscount(discountAmount);
            alert('คูปองถูกใช้เรียบร้อยแล้ว!'); // แจ้งผู้ใช้
        } else {
            alert('คูปองไม่ถูกต้อง'); // แจ้งเมื่อคูปองไม่ถูกต้อง
        }
    };

    return (
        <div className='pt-32'>
            <div className='grid grid-cols-6 border-b py-5 text-center text-base font-semibold'>
                <div className='col-span-3 text-left'>Product</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Subtotal</div>
            </div>
            {product.length > 0 ? (
                <div>
                    {product.map(item => (
                        <div key={item.id} className='grid grid-cols-6 border-b py-5 place-items-center'>
                            <div className='col-span-3 text-left flex gap-5 mr-auto'>
                                <img
                                    className="w-24 h-full object-cover border"
                                    src={item.image}
                                    alt={item.title}
                                />
                                {/* remove item */}
                                <div className='text-sm flex flex-col justify-between'>
                                    <p className=''>{item.title}</p>
                                    <button onClick={() => dispatch(clearCart({ id: item.id }))} className='flex gap-1 items-center text-[#6C7275] text-sm font-semibold'>
                                        <X size={24} />
                                        <span>Remove</span>
                                    </button>
                                </div>
                                {/* remove item */}
                            </div>
                            <div>
                                <div className='flex items-center justify-center gap-3 border border-[#6C7275] rounded w-20 h-8'>
                                    <button onClick={() => dispatch(removeItem({ id: item.id }))}>
                                        <MinusIcon size={15} />
                                    </button>
                                    <span className='text-[0.75rem] font-semibold'>{item.quantity}</span>
                                    <button onClick={() => dispatch(addItem({ id :item.id }))}>
                                        <Plus size={15} />
                                    </button>
                                </div>
                            </div>
                            <span className='text-lg'>${item.price.toLocaleString()}</span>
                            <span className='text-lg font-semibold'>${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    ))}
                    <div className='flex flex-col lg:flex-row justify-between pt-10'>
                        <div className='lg:p-5 pb-5'>
                            <p className='text-[1.25rem] font-medium'>Have a coupon?</p>
                            <p className='text-base text-[#6C7275] py-3'>Add your code for an instant cart discount</p>
                            <div className='p-3 border border-[#6C7275] flex justify-between mt-2'>
                                <div className='flex items-center gap-2 text-[#6C7275] font-medium'>
                                    <svg width="20" height="18" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0181 13.3356L19.7727 14.0444H19.7727L20.0181 13.3356ZM20.0181 7.66437L20.2635 8.3731V8.3731L20.0181 7.66437ZM1.98189 13.3356L2.22727 14.0444H2.22727L1.98189 13.3356ZM1.98189 7.66437L1.73652 8.3731L1.73652 8.3731L1.98189 7.66437ZM14.5303 8.03033C14.8232 7.73744 14.8232 7.26256 14.5303 6.96967C14.2374 6.67678 13.7626 6.67678 13.4697 6.96967L14.5303 8.03033ZM7.46967 12.9697C7.17678 13.2626 7.17678 13.7374 7.46967 14.0303C7.76256 14.3232 8.23744 14.3232 8.53033 14.0303L7.46967 12.9697ZM5 18.75C3.20507 18.75 1.75 17.2949 1.75 15.5H0.25C0.25 18.1234 2.37665 20.25 5 20.25V18.75ZM20.25 15.5C20.25 17.2949 18.7949 18.75 17 18.75V20.25C19.6234 20.25 21.75 18.1234 21.75 15.5H20.25ZM17 2.25C18.7949 2.25 20.25 3.70507 20.25 5.5H21.75C21.75 2.87665 19.6234 0.75 17 0.75V2.25ZM5 0.75C2.37665 0.75 0.25 2.87665 0.25 5.5H1.75C1.75 3.70507 3.20507 2.25 5 2.25V0.75ZM20.2635 12.6269C19.3815 12.3216 18.75 11.4836 18.75 10.5H17.25C17.25 12.1424 18.3054 13.5363 19.7727 14.0444L20.2635 12.6269ZM18.75 10.5C18.75 9.51644 19.3815 8.67844 20.2635 8.3731L19.7727 6.95565C18.3054 7.46367 17.25 8.85761 17.25 10.5H18.75ZM3.25 10.5C3.25 11.4836 2.61845 12.3216 1.73652 12.6269L2.22727 14.0444C3.69461 13.5363 4.75 12.1424 4.75 10.5H3.25ZM1.73652 8.3731C2.61845 8.67844 3.25 9.51644 3.25 10.5H4.75C4.75 8.85762 3.69462 7.46367 2.22727 6.95565L1.73652 8.3731ZM21.75 6.5V5.5H20.25V6.5H21.75ZM20.25 14.5V15.5H21.75V14.5H20.25ZM0.25 14.5V15.5H1.75V14.5H0.25ZM1.75 6.5V5.5H0.25V6.5H1.75ZM17 18.75H5V20.25H17V18.75ZM17 0.75H5V2.25H17V0.75ZM1.73652 12.6269C1.05785 12.8619 0.25 13.4975 0.25 14.5H1.75C1.75 14.4441 1.77081 14.3708 1.85172 14.2813C1.9366 14.1873 2.06974 14.0989 2.22727 14.0444L1.73652 12.6269ZM20.2635 8.3731C20.9422 8.13813 21.75 7.50246 21.75 6.5H20.25C20.25 6.55587 20.2292 6.62917 20.1483 6.71871C20.0634 6.81265 19.9303 6.90111 19.7727 6.95565L20.2635 8.3731ZM2.22727 6.95565C2.06974 6.90111 1.9366 6.81265 1.85172 6.71871C1.77081 6.62917 1.75 6.55587 1.75 6.5H0.25C0.25 7.50246 1.05785 8.13813 1.73652 8.3731L2.22727 6.95565ZM19.7727 14.0444C19.9303 14.0989 20.0634 14.1873 20.1483 14.2813C20.2292 14.3708 20.25 14.4441 20.25 14.5H21.75C21.75 13.4975 20.9422 12.8619 20.2635 12.6269L19.7727 14.0444ZM8.25 7.5C8.25 7.63807 8.13807 7.75 8 7.75V9.25C8.9665 9.25 9.75 8.4665 9.75 7.5H8.25ZM8 7.75C7.86193 7.75 7.75 7.63807 7.75 7.5H6.25C6.25 8.4665 7.0335 9.25 8 9.25V7.75ZM7.75 7.5C7.75 7.36193 7.86193 7.25 8 7.25V5.75C7.0335 5.75 6.25 6.5335 6.25 7.5H7.75ZM8 7.25C8.13807 7.25 8.25 7.36193 8.25 7.5H9.75C9.75 6.5335 8.9665 5.75 8 5.75V7.25ZM14.25 13.5C14.25 13.6381 14.1381 13.75 14 13.75V15.25C14.9665 15.25 15.75 14.4665 15.75 13.5H14.25ZM14 13.75C13.8619 13.75 13.75 13.6381 13.75 13.5H12.25C12.25 14.4665 13.0335 15.25 14 15.25V13.75ZM13.75 13.5C13.75 13.3619 13.8619 13.25 14 13.25V11.75C13.0335 11.75 12.25 12.5335 12.25 13.5H13.75ZM14 13.25C14.1381 13.25 14.25 13.3619 14.25 13.5H15.75C15.75 12.5335 14.9665 11.75 14 11.75V13.25ZM13.4697 6.96967L7.46967 12.9697L8.53033 14.0303L14.5303 8.03033L13.4697 6.96967Z" fill="#6C7275" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder='Coupon Code'
                                        className='outline-none'
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    {/* <p className='text-base'>Coupon Code</p> */}
                                </div>
                                <p className='text-base font-medium cursor-pointer' onClick={handleApplyCoupon}>Apply</p>
                            </div>
                        </div>
                        <div className='rounded border border-[#6C7275] p-5 lg:w-1/3 mt-5 flex flex-col gap-5'>
                            <p className='text-[1.25rem] font-medium'>Cart summary</p>
                            <div className={`flex items-center justify-between border border-[#6C7275] rounded p-3 text-base ${selectedShipping === 0 ? 'bg-[#F3F5F7] border-[#141718]' : ''}`}>
                                <div className='flex gap-2'>
                                    <input
                                        type="radio"
                                        name="shipping"
                                        id="free-shipping"
                                        value={0}
                                        onChange={() => handleShippingChange(0, 'bg-green-100')}  // อัปเดตค่า shipping
                                        defaultChecked

                                    />
                                    <span>Free shipping</span>
                                </div>
                                <p>$0.00</p>
                            </div>
                            <div className={`flex items-center justify-between border border-[#6C7275] rounded p-3 text-base ${selectedShipping === 15 ? 'bg-[#F3F5F7] border-[#141718]' : ''}`}>
                                <div className='flex gap-2'>
                                    <input
                                        type="radio"
                                        name="shipping"
                                        id="express-shipping"
                                        value={15}
                                        onChange={() => handleShippingChange(15, 'bg-red-100')} // อัปเดตค่า shipping
                                    />
                                    <span>Express shipping</span>
                                </div>
                                <p>+$15.00</p>
                            </div>
                            <div className='flex justify-between items-center text-base border-b pb-5 border-[#6C7275]'>
                                <span className=''>Subtotal:</span>
                                <span className='font-semibold'>${subTotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                            </div>
                            <div className='flex justify-between items-center text-base border-b pb-5 border-[#6C7275]'>
                                <span className=''>Discount:</span>
                                <span className='font-semibold text-red-500'>-${discount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                            </div>
                            <div className='flex justify-between items-center text-xl font-semibold'>
                                <span className=''>Total:</span>
                                <span className=''>${calculateTotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>                            </div>
                            <button className='bg-[#141718] text-lg text-white rounded-lg text-center p-3'>Checkout</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )
            }
        </div >
    );
};

export default Cart;
