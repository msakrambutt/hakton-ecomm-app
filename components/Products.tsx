import { client } from '../app/lib/sanityClient';
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';


const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}


async function GetData() {
    const res = await client.fetch('*[_type == "products"]');
    return res;
}


async function Products() {
    const data = await GetData();
    // console.log(data);
    return <div>
        <div>
            <h4 className="text-center mt-20 font-semibold text-[#0062f5]">
                PRODUCTS
            </h4>
            <h1 className="text-center md:text-4xl text-3xl mt-3 font-bold">
                Check What We Have
            </h1>
            <div className="overflow-x-scroll cursor-pointer  overflow-y-hidden mx-10 no-scrollbar">
                <div className="flex gap-6 justify-center w-[1000px] h-[500px] mt-10">
                    {data.map((elem: any) => (
                        <div className="text-center hover:scale-110 hover:duration-200 hover:transition-all w-96 h-96 " key={elem.id}>
                            <Image src={urlFor(elem.image).url()} alt="img" width={350} height={350} className="shadow-lg" />
                            <h3 className="text-2xl font-bold mt-1">{elem.title}</h3>
                            <p className="text-xl font-semibold mt-1">${elem.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

export default Products;
