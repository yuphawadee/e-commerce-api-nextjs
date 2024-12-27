import AddToCartButton from '@/app/components/Home/AddToCartButton';
import ProductCard from '@/app/components/Home/ProductCard';
import { getProductBtCategory, getSingleProduct } from '@/Request/requets';
import { Product } from '@/Request/typing';
import { ChevronRight } from 'lucide-react';
import React from 'react';


const getRandomProducts = (products: Product[], singleProductId: number) => {
    // กรองสินค้าเพื่อไม่ให้ตรงกับ singleProduct
    const filteredProducts = products.filter(product => product.id !== singleProductId);
    // สุ่ม 4 สินค้า
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // คืนค่า 4 สินค้าที่สุ่มแล้ว
};

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    const id = params.id;

    const response = await getSingleProduct(id);
    const singleProduct: Product = response.product; // ดึงข้อมูลสินค้าออกจาก response

    const relateProduct: { products: Product[] } = await getProductBtCategory(singleProduct.category);
    const randomProducts: Product[] = getRandomProducts(relateProduct.products, singleProduct.id);


    return (
        <div className='pt-32'>
            <div className='p-4 flex items-center gap-2 text-sm text-[#828282]'>
                <a href='/'>Home</a>
                <ChevronRight />
                <a href='/' className='capitalize'>{singleProduct.category}</a>
                <ChevronRight />
                {singleProduct.title}
            </div>
            <div className='grid lg:grid-cols-2 border-b'>
                <div className='p-10'>
                    <img src={singleProduct.image} alt={singleProduct.title} />
                </div>
                <div className='flex flex-col h-full gap-5 pb-5 pl-10 pt-10'>
                    <h1 className='text-[2.5rem] font-medium leading-[44px] tracking-[-0.4px]'>{singleProduct.title}</h1>
                    <p className='text-[1.75rem] font-medium leading-[34px] tracking-[-0.6px]'>
                        ${singleProduct.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className='text-base text-[#6C7275]'>{singleProduct.description}</p>
                    <AddToCartButton product={singleProduct} />
                </div>
            </div>
            {/* related product */}
            <div>
                <div className='flex items-center gap-3 py-8'>
                    <div className='w-5 h-10 bg-[#DB4444] rounded'></div>
                    <p className='text-base text-[#DB4444] font-semibold'>Related Product</p>
                    {/* <h1 className='text-[2rem] font-semibold '>Explore Our Products</h1> */}
                </div>
                <div className='grid grid-cols-5 '>
                    {randomProducts.map((product) => (
                        <div className='px-5' key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
