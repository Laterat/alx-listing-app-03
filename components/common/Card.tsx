import { CardProps } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import Pill from './Pill'
import { FaStar } from 'react-icons/fa'


const Card: React.FC<CardProps> = ({
    name,
    address,
    category,
    price,
    offers,
    rating,
    image,
    discount
}) => {
// width={380} height={255}
  return (
    <section className='w-full h-auto text-black rounded-2xl transition duration-300 ease-in-out hover:bg-gray-200 p-6 hover:shadow-2xl'>
        {/* image and category */}
       <div>
        <div className='relative w-full h-auto aspect-[380/255] '>
            <Image src={image} alt={name} fill className='rounded-2xl'/>
        </div>
        <div className='space-y-1 space-x-3 mt-2 '>
            {category.map((pill) => (
                <Pill key={pill} label={pill} />
            ))}
        </div>
       </div> 
       {/* name and address */}
       <div>
        <div className='mb-2 mt-2'>
            <div className='flex justify-between'>
                <div>{name}</div>
                <div>
                    <FaStar className='inline-block mr-1 mb-1.5  text-amber-300' />
                    {rating}</div>
            </div>
            <div className='text-sm font-extralight'>{`${address.state}, ${address.city}, ${address.country}`}</div>
        </div>
       </div> 
       {/* offers and price */}
       <div className='flex justify-between'>
        <Pill label='offers' />
        <div>{`$${price}`}</div>
       </div>
    </section>
  )
}

export default Card