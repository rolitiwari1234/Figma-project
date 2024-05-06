import React from 'react';
import {FaFilter} from 'react-icons/fa'


function Products(){
  return (
    <div className='max-w-screen-2xl   container mx-auto xl:px-28 px-4 mb-12'>
        <h2 className=' text-3xl font-semibold capitalize text-center space-y-3 my-8'>
          Or Subscribe to the newsletter</h2>
      
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between item-center space-y-3 mb-8'>
         {/* all btn */}
          <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button>All Product</button>
            <button>Clothing</button>
            <button>Hoodies</button>
            <button>Bag</button>
          </div>
          {/* sorting option */}
          <div className='flex justify-end mb-4 '>
            <div className='bg-black  '>
              <button className='bg-black text-white w-24 font-semibold  px-2 py-2 '>
                 <FaFilter className=' text-white inline-flex ' /> Filter</button>
            </div>
           </div>
              </div>
         </div>
  )
  
}
 export default Products;