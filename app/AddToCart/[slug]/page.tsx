"use client";
import React, { useState } from 'react';
import { client } from '../../lib/sanityClient';
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

async function GetMaleData(slug1:string) {
    const res = await client.fetch(`*[_type == "products" && genderCategory -> title == "Male" && slug == "${slug1}"]`)
    return res;
}


interface IPropType{
  slug:string;
}

const SlugName = async({params}:{params:IPropType }) => {
  const [quantity,setQuantity]=useState<number>(1);
  const addToCart=()=>{
  
    }

const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setQuantity(Number(e.target.value));
};

const handleIncrement = () => {
setQuantity((prevQuantity) => prevQuantity + 1);
};

const handleDecrement = () => {
setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
}


  const data = await GetMaleData(params.slug);
  console.log("data ",data[0].price);
   
  return (
    <div>
            <div>
            <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
    <div className="lg:w-4/5 mx-auto w-full h-full py-3 flex flex-wrap">
      <Image alt="" className="lg:w-1/2 w-full lg:h-full h-full object-cover object-center rounded p-1" src={urlFor(data[0].image).url()} width={75} height={75} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">My Store </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Title:{' '}{data[0].title}</h1>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Desc:{' '}{data[0].description}</h1>
        <h1 className="text-gray-900 text-md title-font font-medium mb-1">Category:{' '}{data[0].category}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          
        </div>
        <p className="leading-relaxed">{data[0].slug}</p><br/>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className=" ml-6 items-center">
            <span className="mr-3 font-bold">Free Delivery on Advance cash</span><br/>
          </div>
        </div>
        {/* quantity */}
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Quantity</h1>
          <div className="flex items-center mb-4">
          <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          type="number"
          className="border border-gray-300 text-center w-20"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      </div>
          {/* quantity */}
        <div className="flex">
          <div className="flex mx-2">
            <button  onClick={addToCart} className="flex ml-auto mx-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded">Add to Cart</button>
            <span className="title-font font-medium text-2xl text-gray-900">${' '}{data[0].price}/-</span>
 
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
                
            </div>
        </div>
  )


}

export default SlugName;