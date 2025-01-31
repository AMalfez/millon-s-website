"use client"

import React from 'react'

function Paragraph({children}: {children: React.ReactNode}) {
  return (
      <div className='text-[#131313]/[20px] tracking-[2%] my-4'>{children}</div>
  )
}

export default Paragraph