import Link from 'next/link'
import React from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tv', href: '/category/tv' },
    { name: 'Audio', href: '/category/audio' },
    { name: 'Laptop', href: '/category/laptop' },
    { name: 'Mobile', href: '/category/mobile' },
    { name: 'Gaming', href: '/category/gaming' },
    { name: 'Appliances', href: '/category/appliances' },
]

const Footer = () => {
  return (
    <div className=' bg-[#141718]'>
      <div className='max-w-[1200px] m-auto text-[#E8ECEF] p-5'>
        <div className='flex justify-between'>
          <div className='w-[80px]'>
            <svg aria-hidden="true" className="preLogo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="100%" height="100%" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
          </div>
          <div className='flex items-center gap-5'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <hr className=' border-gray-300 py-5' />
        <div className='flex justify-between'>
          <p className=''>Copyright © 2023. All rights reserved</p>
          <div className='flex items-center gap-5'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FEFEFE" strokeWidth="1.5" />
                <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
                <circle cx="12" cy="12" r="5" stroke="#FEFEFE" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="18" rx="4" stroke="#FEFEFE" strokeWidth="1.5" />
                <path d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer