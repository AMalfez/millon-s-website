import React from 'react'
import HeroImage from "../../public/assets/images/Hero_image_1.jpeg"
import Image from 'next/image'

const Card = () => {
  return (
    <div className='min-w-[200px] md:min-w-[300px] h-full bg-white shadow-lg rounded-lg p-4 relative overflow-hidden'>
        <Image src={HeroImage} alt='' fill objectFit='cover' />
    </div>
  )
}

export default Card