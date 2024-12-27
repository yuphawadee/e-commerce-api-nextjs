// 'use client';

// import { RootState } from '@/store/store';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { CartItem, loadCartItems, removeItem } from '@/store/cartSlice';
// import { MinusIcon, Plus, X } from 'lucide-react';

// const Cart = () => {
//     const dispatch = useDispatch();
//     const product = useSelector((state: RootState) => state.cart.items);
//     const [isHydrated, setIsHydrated] = useState(false);

//     useEffect(() => {
//         const storedCartItems = localStorage.getItem('cartItems');
//         if (storedCartItems) {
//             const items: CartItem[] = JSON.parse(storedCartItems);
//             dispatch(loadCartItems(items));
//         }
//         // setIsHydrated(true); // Set hydrated state
//     }, [dispatch]);

//     // if (!isHydrated) return null; // Return null until hydrated

//     // ใช้ isHydrated เพื่อป้องกันไม่ให้ UI แสดงผลจนกว่าจะโหลดข้อมูลจาก localStorage เสร็จ
//     // ใช้ return null ในขณะที่ยังไม่ทำการ hydrate จะช่วยให้ไม่มีการเรนเดอร์ UI ที่ไม่ตรงกันก่อนที่ข้อมูลจะถูกโหลดจาก localStorage

//     return (
//         // <div className='max-w-96 h-screen border'>
//         //     <h2 className='p-5 text-3xl font-medium'>Cart</h2>
//         //     {product.length > 0 ? (
//         //         <div className='pr-3'>
//         //             {product.map(product => (
//         //                 <div key={product.id} className='flex justify-between py-5 border-b'>
//         //                     <div className='flex gap-5'>
//         //                         <img
//         //                             className="w-24 h-full object-cover"
//         //                             src={product.image}
//         //                             alt={product.title}
//         //                         />
//         //                         <div className='flex flex-col gap-2'>
//         //                             <span className='text-sm font-semibold'>{product.title.slice(0,14)}...</span>
//         //                             <div className='flex items-center justify-center gap-3 border border-[#6C7275] rounded w-20 h-8'>
//         //                                 <button onClick={()=>{removeItem}}><MinusIcon size={15}/></button>
//         //                                 <span className='text-[0.8rem] font-semibold'>{product.quantity}</span>
//         //                                 <span><Plus size={15}/></span>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                     <div className='flex flex-col items-end'>
//         //                         <span className='text-sm font-semibold'>${product.price}</span>
//         //                         <X size={24}/>
//         //                     </div>
//         //                 </div>
//         //             ))}
//         //         </div>
//         //     ) : (
//         //         <p>Your cart is empty.</p>
//         //     )}
//         //     <div className='bg-red-500'>
//         //         <div>
//         //             <span>Subtotal</span>
//         //             <span>$</span>
//         //         </div>
//         //         <div>
//         //         <span>Subtotal</span>
//         //         <span>$</span>
//         //         </div>
//         //         <button>Checkout</button>
//         //     </div>
//         // </div>
//         <div>
//             <div>
//                 <div className='grid grid-cols-6 border-b pb-5 text-center'>
//                     <div className='col-span-3 place-items-start'>Product</div>
//                     <div>Quantity</div>
//                     <div>Price</div>
//                     <div className='bg-gray-400'>Subtotal</div>
//                 </div>
//                 {product.length > 0 ? (
//                     <div className=''>
//                         {product.map(product => (
//                             <div key={product.id} className='grid grid-cols-6 border-b py-5 place-content-center place-items-center'>
//                                 <div className='col-span-3 place-items-start'>Product</div>
//                                 <div>
//                                     <div className='flex items-center justify-center gap-3 border border-[#6C7275] rounded w-20 h-8'>
//                                         <button onClick={() => { removeItem }}><MinusIcon size={15} /></button>
//                                         <span className='text-[0.8rem] font-semibold'>{product.quantity}</span>
//                                         <span><Plus size={15} /></span>
//                                     </div>
//                                 </div>
//                                 <span className='text-sm font-semibold'>${product.price}</span>
//                                 <span className='bg-gray-400'>Subtotal</span>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>Your cart is empty.</p>
//                 )}
//                 {/* // <div className='grid grid-cols-6 border-b py-5'>
//                 //     <div className='col-span-3'>Product</div>
//                 //     <div>Quantity</div>
//                 //     <span className='text-sm font-semibold'>${product.price}</span>
//                 //     <div>Subtotal</div>
//                 // </div>
//                 // <div></div> */}
//             </div>
//         </div>
//     );
// };

// export default Cart;
