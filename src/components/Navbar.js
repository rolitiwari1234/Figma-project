import React from 'react'
import { FaSearch,FaShoppingBag,FaUser,FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { useState } from 'react';

function  Navbar(){
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  
    return(
      
   <header className='max-w-screen-2xl  xl:px-28 px-4 absolute top-0 left-0 right-0   '>
    <nav className=' max-w-screen flex justify-between items-center container md:py-4 pt-6 pb-3'>
    <FaSearch  className= 'text-black w-5 h-5 cursor-pointer hidden md:block'/>
        {/*logo */}
      <Link to = "/"><img src ="logo.png"/></Link>
        {/*account and shopping btn*/}
        <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
            <a href = "/"  class='flex items-center gap-2'><FaUser /> Account</a>
            <a href = "/" class='flex items-center gap-2 '><FaShoppingBag />Shopping</a>
        </div>
      {/*navbar for mobile devices */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu}>
            { isMenuOpen ? <FaTimes className='w-5 h-5 text-black'/> : <FaBars className='w-5 h-5 text-black'/> }
        </button>
        </div>
     </nav>
    <hr />
    {/*category item */}
    <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-black '>
       <li className=' hover:text-orange-500'>jewelry & Accessories</li>
            <li className=' hover:text-orange-500'>Clothing & Shoes</li>
            <li className=' hover:text-orange-500'>Home & Living</li>
            <li className=' hover:text-orange-500'>Wedding & Party</li>
            <li className=' hover:text-orange-500'>Toys & Entertainment</li>
            <li className=' hover:text-orange-500'>Art & Collectibles</li>
            <li className=' hover:text-orange-500'>Craft  Supplies & Tools</li>
             </ul>
        </div>
     </header>
  )
}
export default Navbar;