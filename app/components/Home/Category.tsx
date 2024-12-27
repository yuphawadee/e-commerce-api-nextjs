import { getAllCategory } from '@/Request/requets';
import Link from 'next/link';
import React from 'react'

const Category = async () => {
    const response = await getAllCategory();
    const categories:string[] = response.categories; // ดึง categories ออกมาจาก object
    // console.log(categories)
    return (
        <div className=''>
            <div className='flex gap-5 items-center'>
                {/* <div className='w-5 h-10 bg-[#DB4444] rounded'></div> */}
                <h1 className='text-[2rem] font-semibold '>Browse By Category</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-5 pt-5'>
            {categories.map((category) => (
                    <div key={category}>
                    <Link href={`/category/${category}`}> {/* ใช้ Link เพื่อทำให้สามารถคลิกได้ */}
                        <div className='border border-[rgb(0,0,0,0.3)] rounded flex items-center justify-center p-5 cursor-pointer'>
                            {category}
                        </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
}


export default Category