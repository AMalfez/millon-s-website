"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { MoveLeft } from 'lucide-react';


export default function Blog(){
    const param = useParams();
    return(
        <div className='max-w-[856px] mx-auto'>
            <MoveLeft className='cursor-pointer' color='#979797' />
        </div>
    )
}