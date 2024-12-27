// 'use client';

// import { useEffect, useState } from 'react';
// import ProductCard from '@/app/components/Home/ProductCard';
// import { getAllProduct } from '@/Request/requets';
// import { Product } from '@/Request/typing';
// import { useParams } from 'next/navigation';

// const Page = () => {
//     const params = useParams();
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch ข้อมูลล่วงหน้าครั้งเดียวและเก็บไว้ใน localStorage
//     useEffect(() => {
//         const prefetchData = async () => {
//             try {
//                 const cachedData = localStorage.getItem('allProducts');
//                 if (cachedData) {
//                     setProducts(JSON.parse(cachedData));
//                     setLoading(false);
//                 } else {
//                     const response = await getAllProduct();
//                     const allProducts: Product[] = response.products;

//                     // เก็บข้อมูลทั้งหมดใน localStorage
//                     localStorage.setItem('allProducts', JSON.stringify(allProducts));
//                     setProducts(allProducts);
//                     setLoading(false);
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         prefetchData();
//     }, []);

//     // กรองข้อมูลตาม category ที่เลือก
//     const filteredProducts = products.filter(product => params.category === 'all-product' || product.category === params.category);

//     return (
//         <div className="pt-32 pb-10">
//             <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5">
//                 {loading ? (
//                     <div className='h-screen'>
//                         <p>Loading...</p>
//                     </div>
//                 ) : (
//                     filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Page;
'use client'

import ProductCard from '@/app/components/Home/ProductCard';
import { useProductContext } from '@/store/context';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const params = useParams();
    const { products, loading } = useProductContext();
    const filteredProducts = products?.filter(product => params.category === 'all-product' || product.category === params.category);

    if (loading) return <p>Loading...</p>;

    return (
                 <div className="pt-32 pb-10">
                     <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5">
                         {loading ? (
                             <div className='h-screen'>
                                 <p>Loading...</p>
                             </div>
                         ) : (
                             filteredProducts?.map(product => <ProductCard key={product.id} product={product} />)
                         )}
                     </div>
                 </div>
             );
         };

export default Page;
