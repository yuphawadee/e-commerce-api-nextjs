'use client';

import { Product } from '@/Request/typing'
import Link from 'next/link';
import React from 'react'

type product = {
    product: Product;
};

const ProductCard = ({ product }: product) => {
    return (
        <div className="bg-white rounded-lg p-3">
            <Link href={`/product/product-details/${product.id}`} className="flex items-center justify-center h-32">
                <img
                    className="h-full object-cover"
                    src={product.image}
                    alt={product.title}
                />
            </Link>
            {/* <div className="flex items-center justify-center h-32">
                <a href={`/product/product-details/${product.id}`} className='p-5'>
                <p className='absolute top-2 left-1 text-sm text-red-500'>{product.discount}%</p>
                <img
                    className="h-full object-cover"
                    src={product.image}
                    alt={product.title}
                />
                </a>
            </div> */}
            <div className="max-w-50 flex flex-col gap-1">
                {/* <h2 className="line-clamp-2 text-sm font-medium"> */}
                <Link href={`/product/product-details/${product.id}`} className="line-clamp-2 text-sm font-medium">
                    {product.title}
                </Link>
                {/* </h2> */}
                <p className="text-base font-medium">${product.price.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default ProductCard