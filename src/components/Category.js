import React from 'react'
import { Link } from 'react-router-dom';

function Category  (){
 return (
    <div  className='max-w-screen-2xl mx-auto container px-4 py-28  xl:px-28'>
   {/*  logo */}
     <div className= " container flex items-center flex-wrap justify-around gap-1 py-5 ">
     <img src = "01.png"/>
      <img src = "04.png"/>
      <img src = "03.png"/>
      <img src = "05.png"/>
      <img src = "02.png"/>
      
      </div>
      {/* category  */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4 container'>
        <p className=" font-semibold uppercase md:-rotate-90 text-center bg-black
         text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular  styles</p>
          <div >
            <Link  to = ""><img src = "card.png" className=" w-full hover:scale-105 transition-all duration-200"/></Link>
          </div>
          <div className='md:w-1/2 '>
          <div className='grid grid-cols-2 gap-2 '>
            <Link to = "/"><img src = "card1.png" className=" w-full hover:scale-105 transition-all duration-200"/></Link>
            <Link to = "/"><img src = "card2.png" className="w-full hover:scale-105 transition-all duration-200"/></Link>
            <Link to = "/"><img src = "card3.png" className="w-full hover:scale-105 transition-all duration-200"/></Link>
            <Link to = "/"><img src = "card4.png" className="w-full hover:scale-105 transition-all duration-200"/></Link>
          </div>
          </div>
      </div> 
      </div>
  )
}
export default Category;