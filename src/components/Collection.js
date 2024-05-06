import React from 'react'

function Collection(){
    return(
      
    <div className=' bg-center bg-no-repeat  xl:my-20 bg-slate-500 sm:w-full'>
         <img src = "background.png" className='absolute  md:w-full h-[530px]'/>
        <div className=' h-[580px] ml-[150px] flex justify-between md:flex-row items-center absolute'>
        <div className='md:w-1/2 '> </div>
        <div className='md:w-1/2  '>
         <img src = "zara.png"/>
         <p className='text-lg text-left text-white capitalize my-8 md:w-3/4 leading-[32px] '>
            Lustrous yet understated. The new evening
            wear collection exclusively offered at the
           reopened Giorgio Armani boutique in Los
            Angeles.</p>
            <button className='bg-white text-black w-36 h-10 md: hover:bg-orange-500'>
            See Collection</button>
    </div>
    
   </div>
 </div>
    )
}
export default Collection;