import React from "react";


   function Card(){
    
       return (
      <div className="  max-w-screen-2xl   container mx-auto xl:px-28 px-4 mb-8  ">
      <div className="flex flex-col items-center gap-4 container  md:flex-row ">
        <div >
        <img src = "/images/products/card5.png" className="w-64 h-64 hover:scale-90 transition-all duration-200" />
        <p>Adicolor classic joggers</p>
        <div className="flex gap-28 text-slate-500 ">
        <p>Dress</p>
        <p>$63.85</p>
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
        <img src = "/images/products/card7.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Geometric print scraf</p>
        <div className="flex gap-28 text-slate-400">
        <p>scraf</p>
        <p>$53.00</p> 
        </div>
        </div>
        <div>
        <img src = "/images/products/card8.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Yello reserved hoodies</p>
        <div className="flex gap-11 text-slate-400">
        <p >dress</p>
        <p>$364.00</p>
        <p className="text-red-400 gap-11">$155.00</p>
        </div>
        </div>
        </div>
        
      <div className="flex flex-col items-center gap-4 mt-11 container  md:flex-row ">
        <div>
        <img src = "/images/products/card9.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Basic dress green</p>
        <div className="flex gap-28 text-slate-400">
        <p>dress</p>
        <p>$236.00</p>
        </div>
        </div>
        <div >
        <img src = "/images/products/card10.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Nike Air Zoom Pegasus</p>
        <div className="flex gap-11 text-slate-400">
        <p>shoe</p>
        <p>$220.00</p> <p className="text-red-400">$198.00</p>
        </div>
        </div>
        <div>
        <img src = "/images/products/card11.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
         <p>Nike Repal miler</p>
         <div className="flex gap-28 text-slate-400">
            <p>Dress</p>
            <p>$120.50</p>
         </div>
        </div>
        <div >
        <img src = "/images/products/card12.png" className="w-64 h-64 hover:scale-90 transition-all duration-200"/>
        <p>Nike Sportwear future Luxe</p>
        <div className="flex gap-28 text-slate-400">
        <p>glasses</p>
        <p>$160.00</p>
        </div>
        </div>
       </div>
      </div>
  );
};

export default Card;