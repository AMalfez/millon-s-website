"use client"
import Image from 'next/image'
import React from 'react'
import AdminTab from './AdminTab'
import { EventsOfOrganizer } from '@/actions/admin'
import { type SanityDocument } from 'next-sanity'

function Admin({events, organizer}:{events:EventsOfOrganizer, organizer:SanityDocument}) {
    console.log(events);
    console.log(organizer);
    
  return (
    <div className='max-w-[856px] mx-auto'>
        <div className='flex flex-col md:flex-row gap-2 border rounded-md bg-white p-2'>
            <Image
                src={organizer.image.asset.url}
                alt='an avatar image'
                width={120}
                height={120}
                className='object-cover w-44 mx-auto rounded-full md:w-fit aspect-square md:rounded-md'
            />
            <div className='flex flex-col'>
                <h1 className='font-semibold text-xl text-center md:text-left'>{organizer.name}</h1>
                <p className='text-[#979797] text-sm text-center my-2 md:text-left'>{organizer.bio}</p>
                <button className='border transition-all ease-in-out hover:bg-gray-500 hover:text-white mt-3 md:w-fit px-2 py-1 rounded-md text-sm text-gray-500'>Contact Admin</button>
            </div>
        </div>
        <div className='w-full mt-8'>
            <AdminTab events={events}/>
        </div>
    </div>
  )
}

export default Admin