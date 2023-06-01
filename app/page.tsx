import Image from 'next/image'
// import {client} from './lib/sanityClient';
// import imageUrlBuilder from '@sanity/image-url';
import HeroSection from '@/components/HeroSection';
import Promotion from '@/components/Promotion';
import Products from '@/components/Products';
import AuthenticVintage from '@/components/AuthenticVintage';
import SearchInput from '@/components/SearchInput';
// const builder = imageUrlBuilder(client);

// interface IProduct{
//   title:string;
//   description:string;
//   image:string;
// }
// function urlFor(source:any) {
//   return builder.image(source);
// }

// export const getProductData=async()=>{
//   const res=await client.fetch(`*[_type=='product']`);
//   return res;
// }


export default async function Home() {
  // const data:IProduct[]=await getProductData();
  // console.log(data);
  return (
    <div>
      <HeroSection/>
      <Promotion/>
      {/*@ts-ignore*/}
      <Products/>
      <AuthenticVintage/>
      <SearchInput/>
      {/* {
        data.map((item)=>(
          <div key={item.title}>
          <h1>{item.title}</h1>
          <Image src={urlFor(item.image).url()} width={200} height={200} alt=''/>
          <p>{item.description}</p>
          </div>
        ))
      } */}
    </div>
  )
}
