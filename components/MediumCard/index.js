import React from 'react'
import Image from 'next/image'

function MediumCard({ title, img }) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-64 w-72'>
        <Image alt={title} src={img} layout='fill' className='rounded-xl' />
      </div>
      <h3 className='text-xl font-semibold mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard
