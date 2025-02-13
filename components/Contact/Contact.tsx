"use client"
import React from 'react'
import Image from 'next/image'
import Mail from "@/public/assets/images/Mail.png"
import { Input } from '@/components/ui/input'
import BackButton from '@/components/ui/BackButton'
import { sendMail } from '@/actions/mail'
import { useToast } from "@/hooks/use-toast"

function Contact() {
  const { toast } = useToast()
    const [data, setData] = React.useState({
        name:"",
        email:"",
        message:""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await sendMail({email:"aflezcodes24x7@gmail.com", sendTo:"alfezcodes24x7@gmail.com",subject:"QUERY RAISED", text:"QUERY RAISED", html:`
              <p>Hi<p/>
              <p><strong>${data.name}</strong>, email <strong>${data.email}</strong> has some query. Here's the full message:</p>
              <p><i>${'"'+data.message+'"'}</i></p>
              <p>Please reply as soon as possible</p>
              `});
            console.log(res);
            toast({
              title:"Message sent successfully!",
              description:"We will get back to you shortly."
            })
            setData({name:"",email:"",message:""});
        } catch (error) {
          toast({
            title:"Message unsuccessful!",
            description:"Sorry. We can't send your message right now. Please try again later."
          })
            console.log(error);
            
        }
    }
  return (
    <div className='bg-[#F3F4F6] flex justify-center items-center mt-16 py-20 px-4'>
      <div className='min-h-fit md:h-[528px] w-10/12 flex flex-col justify-between items-center'>
        <div className='w-full h-[32px] flex gap-2 md:gap-6 font-bold text-[20px] md:text-[28px] items-center'>
          <BackButton className='relative h-[16px] md:h-[24px] w-[16px] md:w-[24px]' />
          <h1 className='capitalize'>Contact us</h1>
        </div>
        <div className='w-full md:h-[432px] flex flex-col md:flex-row gap-10'>
          <div className='w-full md:w-1/2 h-full flex flex-col justify-between'>
            <h2 className='font-semibold text-[24px] md:text-[32px]'>Have something to share or ask?</h2>
            <p className='md:text-[22px]'>Let us know, we’d love to hear from you!</p>
            <div className='relative h-[204px] md:h-[274px] w-[204px] md:w-[274px] self-center'>
              <Image src={Mail} alt='mail' fill objectFit='contain' />
            </div>
          </div>
          <form onSubmit={handleSubmit} className='w-full md:w-1/2 h-full bg-[#fefefe] p-2 flex gap-2 md:gap-0 flex-col justify-between rounded-[8px]'>
            <Input placeholder='Full name*' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} type='text' name='fullName' className='border-[#b0b0b0]' />
            <Input placeholder='Email*' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} type='email' name='email' className='border-[#b0b0b0]' />
            <textarea 
              name="message" 
              placeholder='Drop your message here...' 
              className='border border-[#b0b0b0] rounded-md p-2 w-full h-[274px] font-medium text-[14px] outline-none' 
              cols={30} 
              rows={10}
              value={data.message} onChange={(e)=>setData({...data,message:e.target.value})}
            ></textarea>
            <button type='submit' style={{background: "linear-gradient(360deg, #FF9501 0%, #E57B00 100%)"}} className='capitalize h-[34px] w-[140px] rounded-[4px] text-white font-bold flex justify-center items-center'>
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact