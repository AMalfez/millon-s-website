"use client"
import React from 'react'

function List({type, description, points}:{type: "ordered"|"unordered", description: string, points: string[]}) {
  return (
    <div className='w-full'>
        <p className='text-[#131313]/[20px] tracking-[2%] mt-4'>{description}</p>
        {type === 'ordered' ? 
            <ol className='list-decimal ml-6'>
                {points.map((point, index) => (
                    <li key={index} className='text-[#131313]/[20px] tracking-[2%]'>{point}</li>
                ))}
            </ol> : 
            <ul className='list-disc ml-6'>
                {points.map((point, index) => (
                    <li key={index} className='text-[#131313]/[20px] tracking-[2%]'>{point}</li>
                ))}
            </ul>
        }
    </div>
  )
}

export default List