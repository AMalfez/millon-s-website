"use client"

import React from 'react'

function Paragraph({content}: {content: string}) {
  return (
    <>
      <p className='text-[#131313]/[20px] tracking-[2%] my-4'>{content}</p>
    </>
  )
}

export default Paragraph