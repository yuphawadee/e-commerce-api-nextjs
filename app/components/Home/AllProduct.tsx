'use client'

import { getAllProduct } from '@/Request/requets'
import { Product } from '@/Request/typing'
import { BeatLoader } from 'react-spinners'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useProductContext } from '@/store/context'

const AllProduct = () => {
    const { products, loading } = useProductContext();

    if (loading) return <p>Loading...</p>;

    return (
        <div className='pb-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[2rem] font-semibold pb-5'>Explore Our Products</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5'>
                {products?.slice(25,35).map((product) => (
                    <div className='mx-5'>
                        <ProductCard key={product.id} product={product} />
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center pt-10'>
                    <Link href='/category/all-product'
                        className='flex gap-2 items-center border-b-2 border-[#171717]'
                    >
                        View All Product
                        <ArrowRight />
                    </Link>
                </div>
        </div>

    )
}

export default AllProduct;



