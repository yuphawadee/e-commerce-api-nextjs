'use client'

import { Product } from '@/Request/typing';
import { useProductContext } from '@/store/context';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import Link from 'next/link';

const SearchBox = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { products, loading } = useProductContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        if (searchTerm) {
            const filtered: Product[] | undefined = products?.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered || null);
        } else {
            setFilteredProducts(null);
        }
    }, [searchTerm, products]);
    

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className='cursor-pointer flex items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z" stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                <div className="fixed inset-0 flex items-center mt-0 justify-center p-4">
                    <DialogPanel className="w-full max-w-[758px] border bg-white rounded-lg ">
                        <div className='flex justify-between items-center p-5 border-b'>
                            <div className='w-full'>
                                <div className='flex gap-2'>
                                    <Search className='text-gray-400' size={24} />
                                    <input
                                        type="text"
                                        placeholder='Search product'
                                        className='outline-none flex-1'
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                            <HiMiniXMark onClick={() => setIsOpen(false)} className='text-2xl cursor-pointer' />
                        </div>
                        <div className="h-80 overflow-auto">
                            <ul>
                                {filteredProducts && filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <Link href={`/product/product-details/${product.id}`} key={product.id}>
                                            <p className='border-b px-5 flex items-center py-2'>{product.title}</p>
                                        </Link>
                                    ))
                                ) : (
                                    searchTerm && <div className='p-5'>No products found.</div>
                                )}
                            </ul>
                        </div>


                    </DialogPanel>

                </div>
            </Dialog>
        </div>
    )
}

export default SearchBox