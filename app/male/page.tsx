import { client } from '../lib/sanityClient';
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

export async function GetMaleData() {
    const res = await client.fetch(`*[_type == "products" && genderCategory -> title == "Male" ]`)
    return res;
}

async function Male() {
    const data = await GetMaleData();
    // console.log(data);
    return <div className="my-20">
        <div className="md:grid grid-cols-3 md:ml-36 ml-16 gap-y-14">
            {data.map((elem: any) => (
                <div className="mb-10 md:mb-0" key={elem.id}>
                    <Link href={`/AddToCart/${elem.slug}`} >
                    <Image src={urlFor(elem.image).url()} alt="product" width={250} height={250} />
                    <h2 className="text-xl font-bold pt-2">{elem.title}</h2>
                    <p className="text-gray-400 font-semibold pt-2">{elem.category}</p>
                    <p className="text-xl font-semibold pt-2">${elem.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>;
}

export default Male;