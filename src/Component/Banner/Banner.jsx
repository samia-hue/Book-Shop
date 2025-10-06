import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto  bg-gray-200 text-black rounded-xl '>
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                <button className='btn btn-primary'>test</button>
            </div>
            <div>
                <img className='w-[250px] h-[300px] ' src={bookImg} alt="book img" />
            </div>
        </div>
    );
};

export default Banner;