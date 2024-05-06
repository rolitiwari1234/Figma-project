import React from 'react'
import { FaShoppingBag } from "react-icons/fa";


function Banner(){
    return(
        <div className=" bg-primaryBG py-12 xl:px-28 px-4">
            <div className=' py-60 flex flex-col md:flex-row justify-between items-center gap-14 md:py-36'>
                 {/*images  */}
                <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collections</h1>
                <p className='text-xl mb-7'>
                You are explore ans shop many different collection from various barands here .</p>
                <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm
                flex-items-center gap-2'>
                <FaShoppingBag  className='inline-flex'/>  Shop Now</button>
                </div>
                <div className='md:w-1/2 '>
                    <img src = "19.png" />
                </div>
               
        </div>
        </div>
    )
}
export default Banner;