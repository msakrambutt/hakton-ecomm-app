import Image from 'next/image';
function Promotion() {
    return (
        <div>
            <div>
                <h4 className="text-center mt-20 font-semibold text-[#0062f5]">
                    PROMOTIONS
                </h4>
                <h1 className="text-center md:text-4xl text-3xl mt-3 font-bold">
                    Our Promotions Events
                </h1>
            </div>
            <div className="md:flex justify-center mt-4 py-5">
                <div className="mx-16 md:mx-0">
                    <div className="bg-[#d6d6d8] md:flex md:w-[500px] md:h-[200px] w-full h-full">
                        <div className="pt-8 py-3 pl-4 md:pl-0">
                            <h2 className="text-4xl font-bold md:pl-20">GET UP TO 60%</h2>
                            <p className="pt-2 md:pl-20 text-xl">For the summer season</p>
                        </div>
                        <Image src={"/event1.webp"} alt="even1" width={200} height={200} />
                    </div>
                    <div className="bg-black text-white text-center pt-5 md:w-[500px] md:h-[200px] w-full h-full mt-3 py-3">
                        <h2 className="md:text-4xl text-2xl font-semibold">GET 30% Off</h2>
                        <p className="pt-4">USE PROMO CODE</p>
                        <button className="mt-4 md:px-9 px-4 py-2 rounded-xl bg-[#474747]">DINEWEEKENDSALE</button>
                    </div>
                </div>
                <div className="md:flex gap-x-6 mx-10 md:mx-0 mt-2 md:mt-0 ">
                    <div className='relative '>
                        <Image src={"/event2.webp"} alt="event" width={250} height={200} className="bg-[#efe1c7] md:ml-6 ml-11 pt-24" />
                        <div className='absolute top-4 left-10 px-10 md:px-0'>
                            Flex Sweatshirt
                            <div className='line-through'>$100.00</div><span className='font-semibold text-xl'>$75.00</span>
                        </div>
                    </div>

                    <div className='relative'>
                        <Image src={"/event3.webp"} alt="event" width={250} height={200} className="bg-[#d7d7d9] pt-24 ml-11 md:ml-0 mt-2 md:mt-0" />
                        <div className='absolute top-4 left-10 px-10 md:px-0'>
                            Flex Push Button
                            <div className='line-through'>$225.00</div><span className='font-semibold text-xl'>$190.00</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Promotion;

