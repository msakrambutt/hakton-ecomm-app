import Image from 'next/image';

function HeroSection() {
    return <div className='flex mt-20'>
        {/* Left side */}
        <div className='basis-[50%] md:ml-20 mx-[100px] md:mx-0'>
            <button className="bg-[#e1edff] text-[#4347ff] font-bold px-5 py-2 rounded-md">
                Sale 70%
            </button>
            <h1 className="text-5xl font-bold mt-7 md:pr-52">An Industrial Take on Streetwear</h1>
            <p className='mt-7 md:pr-72'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <button type="button" className="mt-7 text-white bg-black text-sm px-3 py-6  inline-flex font-semibold border border-t-neutral-500 border-l-neutral-00">
                <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                <div>Start Shopping</div>
            </button>
            <div className='grid md:grid-cols-4 grid-cols-2  mt-7'>
                <Image src="/Featured1.webp" alt='f1' width={100} height={100} />
                <Image src="/Featured2.webp" alt='f2' width={100} height={100} />
                <Image src="/Featured3.webp" alt='f3' width={100} height={100} />
                <Image src="/Featured4.webp" alt='f4' width={100} height={100} />
            </div>
        </div>

        {/* Right Side */}
        <div className='basis-[50%] flex '>
        <div className=' bg-[#ffece3] max-w-lg max-h-lg rounded-full hidden md:inline py-10'>
        <Image src={"/header.webp"} alt='header' width={1400} height={1400} className='mx-[40px] -mb-20 -mt-16 ' />
        </div>
        </div>
    </div>
}

export default HeroSection;