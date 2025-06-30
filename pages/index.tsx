import React from 'react'
import Layout from '@/components/layout/Layout'
import Pill from '@/components/common/Pill'
import Card from '@/components/common/Card'
import Image from 'next/image'
import { PROPERTYLISTINGSAMPLE } from '@/constants'


const index: React.FC = () => {

  const samples = PROPERTYLISTINGSAMPLE
  return (
    <>
{/* width={1608} height={481} */}
      <section className='w-full flex flex-col-reverse px-4 md:px-16 md:flex-col space-y-2'>
        <div className='relative w-full h-72 md:h-[481px]'>
          <Image src='/assets/image 1.png' alt='background image'  className='rounded-3xl w-full h-auto object-cover' fill priority/>
          <div className='absolute text-white text-center mx-auto top-16 px-4 space-y-3 '>
            <p className='text-4xl font-extrabold'>Find Your Favorite Place Here</p>
            <p className='text-sm'>The best prices for over 2 million properties worldwide</p>
          </div>
        </div>

        <div className=' flex flex-row-reverse mt-4  md:justify-between md:flex-row'>
          <div className='flex   lg:w-2xl space-x-6 lg:justify-between lg:space-x-0'>
            <Pill label='All' className='hidden sm:inline-block'/>
            <Pill label='Top Villa' className='hidden sm:inline-block'/>
            <Pill label='Free Schedule' className='hidden sm:inline-block'/>
            <Pill label='Book Now, Pay later' className='hidden lg:inline-block'/>
            <Pill label='Self CheckIn' className='hidden lg:inline-block'/>
            <Pill label='Instant Book' className='hidden lg:inline-block'/>
          </div>

          <div className='w-auto space-x-6 lg:space-x-2'>
            <Pill label='Filter' className='hidden sm:inline-block' />
            <Pill label='Sort By: Highest Price' className='hidden md:inline-block'/>
          </div>
        </div>
      </section>


        <section className='w-full mt-12 px-4 grid grid-cols-1 gap-6  md:px-16 md:grid-cols-3 '>
          {samples.map((sample, index) => (
            <Card key={index} name={sample.name} address={sample.address} rating={sample.rating} category={sample.category} price={sample.price} offers={sample.offers} image={sample.image} />
          ))}
        </section>
    </>
  )
}

export default index