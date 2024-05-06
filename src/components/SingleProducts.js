import React from 'react'
 import { Link } from 'react-router-dom';

function SingleProducts(){
  return (
    <div className='flex flex-col  container  bg-primaryBG py-12 xl:px-28 px-16'>
        <div className='flex flex-row text-center justify-center mb-8'>
             <h1 className='font-semibold text-3xl'>
              Follow products and discounts on Instagram</h1>
        </div>
        <div className='flex flex-wrap gap-4 items-center  mb-20'>
           <Link to = "/" > <img className="w-40 h-48 " src = "/images/products/card13.png" /></Link>
          <Link to = "/" > <img className="w-40 h-48 " src = "/images/products/card14.png"/></Link>
          <Link to = "/" > <img className="w-40 h-48 " src = "/images/products/card15.png"/></Link>
          <Link to = "/" ><img className="w-40 h-48 " src = "/images/products/card16.png"/></Link>
          <Link to = "/" > <img className="w-40 h-48 " src = "/images/products/card17.png"/></Link>
          <Link to = "/" > <img className="w-40 h-48 " src = "/images/products/card18.png"/></Link>
        </div>
        <div>
            <h2 className='font-semibold text-3xl text-center mb-8'>Or Subscribe To The Newletter</h2>
            <form>
                <input  type = "email" name= "email" id= "email" placeholder='Email address...' 
                className="h-8   border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 mr-4"/>
                <input type = "submit" value = "SUBMIT"  className=' h-8 border-black  border-b-2 text-slate-500 px-6 py-1 '/>
            </form>
        </div>
    </div>
    
  )
}
export default SingleProducts;