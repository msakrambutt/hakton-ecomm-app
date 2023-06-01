
function SearchInput() {
    return <div className="mt-20 pb-14 relative">
        <div className="text-center">
            <h1 className="text-3xl font-bold px-3 md:px-0">Subscribe Our Newsletter</h1>
            <p className="pt-4 px-10 md:px-0">Get the latest information and promo offers directly</p>
        </div>
        <div className="md:flex md:ml-[450px] gap-3 pt-14 items-center">
            <div className="flex justify-center">
                <input placeholder="Input email address" size={30} className="py-2 px-2 outline" />
            </div>
            <div className="flex justify-center">
                <button className='bg-black px-2 border border-t-neutral-600 border-l-neutral-600 py-3 text-white font-semibold mt-3 md:mt-0'>Get Started</button>
            </div>
        </div>
        <p className="absolute text-center md:text-9xl text-7xl font-bold text-gray-200 opacity-30 md:top-2 top-14 md:right-[300px]">Newsletter</p>
    </div>;
}

export default SearchInput;
