import React from 'react'
import Image from 'next/image'
import ArrowLeft from '../../public/assets/images/ArrowLeft.png'
import Mail from "../../public/assets/images/Mail.png"
import { Input } from '@/components/ui/input'

const ContactPage = () => {
  return (
    <div className='bg-[#F3F4F6] flex justify-center items-center mt-16 py-20 px-4 mb-20'>
        <div className='min-h-fit md:h-[528px] w-full md:w-[856px] flex flex-col justify-between items-center'>
            <div className='w-full h-[32px] flex gap-2 md:gap-6 font-bold text-[20px] md:text-[28px] items-center'>
                <div className='relative h-[16px] md:h-[24px] w-[16px] md:w-[24px]'>
                    <Image src={ArrowLeft} alt='arrow' fill objectFit='contain' className='cursor-pointer'/>
                </div>
                <h1 className='capitalize'>Contact us</h1>
            </div>
            <div className='w-full md:h-[432px] flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-1/2 h-full flex flex-col justify-between'>
                    <h2 className='font-semibold text-[24px] md:text-[32px]'>Have something to share or ask?</h2>
                    <p className='md:text-[22px]'>Let us know, we’d love to hear from you!</p>
                    <div className='relative h-[204px] md:h-[274px] w-[204px] md:w-[274px] self-center'>
                        <Image src={Mail} alt='mail' fill objectFit='contain'/>
                    </div>
                </div>
                <div className='w-full md:w-1/2 h-full bg-[#fefefe] p-2 flex gap-2 md:gap-0 flex-col justify-between rounded-[8px]'>
                    <Input placeholder='Full name*' type='text' name='fullName' className='border-[#b0b0b0]'/>
                    <Input placeholder='Email*' type='email' name='email' className='border-[#b0b0b0]'/>
                    <textarea 
                        name="message" 
                        placeholder='Drop your message here...' 
                        className='border border-[#b0b0b0] rounded-md p-2 w-full h-[274px] font-medium text-[14px] outline-none' 
                        cols={30} 
                        rows={10}
                    >

                    </textarea>
                    <button style={{background: "linear-gradient(360deg, #FF9501 0%, #E57B00 100%)"}} className='capitalize h-[34px] w-[140px] rounded-[4px] text-white font-bold flex justify-center items-center'>send message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage