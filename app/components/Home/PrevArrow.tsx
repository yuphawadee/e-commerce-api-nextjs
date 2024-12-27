import React from 'react'

type PrevArrowProps = {
    onClick: () => void;
};

const PrevArrow = ({ onClick }: PrevArrowProps) => {
  return (
    <div className='flex items-center'>
    <button className="slick-arrow prev z-10 absolute -left-3 lg:-left-10 top-1/3 transform -translate-y-1/2" onClick={onClick}>
         <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
             <circle opacity="0.2" cx="16" cy="16" r="16" fill="black"></circle>
             <path d="M19 22L13 16L19 10" stroke="white" ></path>
         </svg>        
     </button>
</div>
  )
}

export default PrevArrow