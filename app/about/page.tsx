"use client";
import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../public/assets/images/ArrowLeft.png';
import Image from 'next/image';
import Scroller from '@/components/Scroller/Scroller';

const AboutPage = () => {
  const [isClient, setIsClient] = useState(false); // State to ensure client-side only

  useEffect(() => {
    setIsClient(true); // Only set this to true once client-side rendering starts
  }, []);

  const handleBack = () => {
    if (isClient) {
      window.history.back(); // Native browser back functionality
    }
  };

  if (!isClient) {
    return null; // Return null during server-side rendering (SSR)
  }

  return (
    <div className='flex flex-col bg-[#F3F4F6] justify-center items-center w-full mt-16 py-20'>
      <div className='min-h-fit md:h-[347px] w-full md:max-w-[856px] flex gap-2 md:gap-0 flex-col justify-between items-center'>
        <div className='w-full h-[32px] flex gap-2 md:gap-6 font-bold text-[20px] md:text-[28px] items-center px-4 md:px-0'>
          <div
            className='relative h-[16px] md:h-[24px] w-[16px] md:w-[24px]'
            onClick={handleBack} // Call handleBack function on click
          >
            <Image src={ArrowLeft} alt='arrow' fill objectFit='contain' className='cursor-pointer' />
          </div>
          <h1 className='capitalize'>Our story</h1>
        </div>
        <div className='w-full md:w-[569px] md:h-[251px] text-center flex gap-2 md:gap-0 flex-col justify-between items-center px-4 md:px-0'>
          <h2 className='text-[30px] leading-[30px] md:text-[40px] font-semibold'>Discover Our Journey So Far</h2>
          <p className='text-[12px] md:text-[18px] font-normal text-[#2D2D2D]'>
            Wendy, the owner/founder of OC Fun Frenzy, has been living in Orange County, California for several years now and is always looking for new and fun things to do, but she found it difficult to find adventures. She would spend hours online looking for unique experiences and finally decided to just create her own one-stop place to house all of them. So, she created this site. She hopes you enjoy it!
          </p>
        </div>
      </div>
      <Scroller />
    </div>
  );
};

export default AboutPage;
