/* eslint-disable react/jsx-key */
import Image from 'next/image'
import { client } from "@/lib/sanityClient"
import {Image as IImage} from "sanity"
import { urlForImage } from '../../sanity/lib/image';


export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    title,
    image,
    category -> {
      name
    }
  }`);
  return res
}



interface IProduct {
  title: string,
  _id:string,
  description: string
  image: IImage,
  price:number,
  category:{
    name:string
  }
}

export default async function Home() {

  const data: IProduct[] = await getProductData()


  return (
    <div className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10'>
      {data.map((item) => (
       <div>
        <Image width={200} height={300} className='max-h-[200px] object-cover object-center' src={urlForImage(item.image).url()}  alt="pic" />
        <h2 className="font-bold tracking-wider leading-6 mt-2">
                    {item.title}
                  </h2>
                  <h2 className="font-bold text-[#D7D7D9]">{item.description}</h2>
                  <h2 className="text-lg font-semibold my-1">
                     {item.price}$
                  </h2>
                  <button className='ml-auto py-1.5 px-4 bg-black rounded-md font-semibold text-white'>Add to cart</button>
       </div>
       


      ))}
    </div>
  )
}