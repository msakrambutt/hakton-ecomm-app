import Image from 'next/image';

function AuthenticVintage() {
  return (
    <div className='md:mt-32 mt-16'>
      <div className='md:text-right md:text-5xl pr-20 md:pr-0 text-4xl leading-10 ml-12 md:ml-0 md:pl-[700px] md:mr-[100px] font-bold  mb-3'>Unique and Authentic Vintage Designer Jewellery</div>
      <div className='md:flex'>
        {/* Left Side */}
        <div className='grid grid-cols-2 gap-5 md:gap-0 mx-[50px] basis-[50%] relative'>
          <div>
            <h3 className='text-xl font-semibold md:pr-11'>Using Good Quality Materials</h3>
            <p className='md:pr-28 pt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold md:pr-11'>100% Handmade Products</h3>
            <p className='md:pr-28 pt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold md:pr-11'>Modern Fashion Design</h3>
            <p className='md:pr-28 pt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold md:pr-11'>Discount for Bulk Orders</h3>
            <p className='md:pr-28 pt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <p className='absolute md:text-[100px] text-[80px]  font-bold md:pr-36 opacity-30 text-gray-300 md:-top-3 top-4 leading-[100px]'>Different From Other</p>
        </div>
        {/* Right Side */}
        <div className='md:flex  gap-5 basis-[50%]'>
          <div className=''>
            <Image
              src={"/feature.webp"}
              alt="feature"
              width={100}
              height={100}
              className='md:w-[1500px] w-[300px] mx-auto md:mx-0 mt-10 md:mt-0'
            />
          </div>
          <div className=''>
            <p className='mt-7 md:pr-[100px] text-justify mx-10 md:mx-0'>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className='mt-8 bg-black px-4 py-4 text-white ml-10 md:mx-0 border border-t-neutral-500 border-l-neutral-500'>See All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticVintage;
