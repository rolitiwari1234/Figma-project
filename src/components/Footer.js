import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
    <div>
        <div className=' max-w-screen-2xl  flex flex-row container  md: xl:px-28 px-16'>
            <div className=' w-full mb-10 mt-10 flex flex-col md:flex-row item-start  gap-8'>
            <div className='w-full h-72  md:w-1/4'>
                <div className='mt-4 mb-4 '>
                <Link><img src = "logo.png"/></Link>
                </div>
                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing
                   elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua</p>
                   <div className='flex flex-row justify-start gap-8 md:flex-row text-xl mb-4'>
                   <Link to = "/"> <div> <FaFacebookF /></div></Link>
                  <Link to = "/" ><div><FaTwitter /> </div></Link>
                 <Link to = "/"> <div><FaLinkedin /></div></Link>
                  <Link to = "/"> <div><FaInstagram /></div></Link>
                   </div>
            </div>
            {/* CATALOG MENU */}
            <div className=' w-full h-44  md:w-1/4 '>
                <h2 className="text-xl font-semibold mt-4 mb-4">CATALOG</h2>
                <Link to = "/"><h2> Necklaces</h2> </Link>
                <Link to = "/"><h2> Hoodies</h2> </Link>
                <Link to = "/"><h2> Jewerly Box</h2> </Link>
                <Link to = "/"><h2> T-Shirt</h2> </Link>
                <Link to = "/"><h2> Jacket</h2> </Link>
            </div>
            {/* ABOUT MENU */}
            <div className=' w-full h-52  md:w-1/4'>
            <h2 className="text-xl font-semibold mt-4 mb-4">ABOUT US</h2>
                <Link to = "/"><h2> Our Producers</h2> </Link>
                <Link to = "/"><h2> Sitemap</h2> </Link>
                <Link to = "/"><h2> FAQ</h2> </Link>
                <Link to = "/"><h2> About Us</h2> </Link>
                <Link to = "/"><h2> Terms & Conditions</h2> </Link>
            </div>
            {/* CUSTROM MENU */}
            <div className=' w-full h-60 md:w-1/4'>
            <h2 className="text-xl font-semibold mt-4 mb-4">CUSTROM SERVICES</h2>
                <Link to = "/"><h2> Contact Us</h2> </Link>
                <Link to = "/"><h2> Track Your Order</h2> </Link>
                <Link to = "/"><h2> Product Care & Repair</h2> </Link>
                <Link to = "/"><h2> Book An Appointment</h2> </Link>
                <Link to = "/"><h2> Shipping & Returns</h2> </Link>
            </div>
            </div>
         </div>
   </div>

    )
}
export default Footer;