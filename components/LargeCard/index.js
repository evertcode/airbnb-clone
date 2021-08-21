import React from 'react'
import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          alt={title}
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl md:text-white text-black mb-3 w-64'>{title}</h3>
        <p className='md:text-white text-black max-w-sm'>{description}</p>

        <button className='text-sm font-bold bg-white text-gray-900 px-4 py-3 rounded-lg mt-5'>
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
