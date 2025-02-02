"use client"

import React from 'react'

function Heading({content}: {content: string}) {
  return (
    <>
    <h2 className='text-lg font-semibold'>{content}</h2>
    </>
  )
}

export default Heading