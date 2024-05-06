import React from 'react'

function Seller(){
    return(
        <div className='max-w-screen-2xl  items-center container mx:auto xl:px-28 px-4  mt-[700px]'>
            <div className='font-semibold text-center text-3xl'>
            <h2> Best Seller</h2>
            </div>
            
          {/* Best Seller */}
          <div className='flex flex-col md:flex-row flex-wrap md:justify-between item-center space-y-3 mb-8 mt-9'>
         <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button>All Product</button>
            <button>Clothing</button>
            <button>Hoodies</button>
            <button>Bag</button>
          </div>
           <div className='flex justify-end mb-4 rounded-sm'>
            <div className='bg-black p-2'>
              <button className=' text-white w-24' > Show All </button>
            </div>
           </div>
        </div>
        
        {/* image products */}
        <div className="flex flex-col gap-4 container items-center md:flex-row  mb-16">
        <div >
        <img src = "/images/products/card9.png" className="w-64 h-64 hover:scale-90 transition-all duration-200" />
        <p> Basic Green dress</p>
        <div className="flex gap-28 text-slate-500 ">
        <p>Dress</p>
        <p>$236.00</p>
        </div>
        </div>
        <div>
        <img src = "/images/products/card6.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Nike Sportwear Future Luxe</p>
        <div className="flex gap-28 text-slate-400">
        <p>Bag</p>
        <p>$130.00</p>
        </div>
        </div>
        <div>
        <img src = "/images/products/card8.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Yello reserved hoodies</p>
        <div className="flex gap-11 text-slate-400">
        <p>dress</p>
        <p>$364.00</p> 
        <p className='text-red-400 gap-11'>$155.00</p>
        </div>
        </div>
        <div>
        <img src = "/images/products/card10.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Nike Air Zoom Pegasus</p>
        <div className="flex gap-11 text-slate-400">
        <p >shoe</p>
        <p>$220.00</p>
        <p className="text-red-400 gap-11">$198.00</p>
        </div>
        </div>
      </div>
        </div>
    )
}
export default Seller;