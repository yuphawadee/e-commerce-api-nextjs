import React from 'react';

type NextArrowProps = {
    onClick: () => void;
};

const NextArrow = ({ onClick }: NextArrowProps) => {
    return (
        <div className='flex items-center'>
            <button className="slick-arrow next z-10 absolute -right-3 lg:-right-10 top-1/3 transform -translate-y-1/2" onClick={onClick}>
                <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="16" cy="16" r="16" fill="black"></circle>
                    <path d="M14 22L20 16L14 10" stroke="white"></path>
                </svg>
            </button>
        </div>
    );
}

export default NextArrow;
