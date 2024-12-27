'use client'

import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { useProductContext } from '@/store/context';

const FlashSales = () => {
    // const [products, setProducts] = useState<Product[] | null>(null);
    // const [loading, setLoading] = useState(true);
    // // console.log(products)

    // useEffect(() => {
    //     const getData = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await getAllProduct();
    //             const allProducts: Product[] = response.products;
    //             const onSaleProduct = allProducts.filter(product => product.onSale === true);
    //             setProducts(onSaleProduct);
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     getData();
    // }, []);

    const { products, loading } = useProductContext();
    const filteredProducts = products?.filter(product => product.onSale === true);

    if (loading) return <p>Loading...</p>;

    // slide
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <div className='relative'>
            <div className=''>
                {/* <div className='flex items-center gap-3'>
                    <div className='w-5 h-10 bg-[#DB4444] rounded'></div>
                    <p className='text-base text-[#DB4444] font-semibold'>Our Products</p>
                </div> */}
                <h1 className='text-[2rem] font-semibold pb-5'>Flash Sales</h1>
            </div>
            <div className=''>
                <Slider {...settings} >
                    {filteredProducts?.map((product) => {
                        return <div className='px-5' key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default FlashSales