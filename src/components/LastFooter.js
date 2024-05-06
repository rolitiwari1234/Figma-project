import React from "react";
import { FaArrowUp } from "react-icons/fa";

function LastFooter(){
    return(
        <div className=" text-white  bg-black w-full flex flex-col md:flex-row  justify-items-start">
               <div className='pt-5 px-24  md:items-start  gap-96 '>
               <p>@ 2024 Coral,Inc ...</p>
              </div>
              <div className=" h-12 pt-3 px-24 md: gap-96 ">
               <img src = "icon.png" className="text-semibold"/>
              </div>
              <div className=' pt-5 pl-32 '>
                <p className="flex flex-row  gap-2"> Scroll 
                <FaArrowUp className=" text-xl gap-3" /> </p>
             </div>
            </div>
       )
}

export default LastFooter;