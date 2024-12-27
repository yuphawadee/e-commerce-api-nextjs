// // ProductContext.tsx
// import { createContext, useContext, useEffect, useState } from 'react';
// import { getAllProduct } from '@/Request/requets';
// import { Product } from '@/Request/typing';

// const ProductContext = createContext(null);

// export const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState<Product[] | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await getAllProduct();
//                 const allProducts: Product[] = response.products;
//                 setProducts(allProducts);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <ProductContext.Provider value={{ products, loading }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };

// export const useProductContext = () => useContext(ProductContext);
