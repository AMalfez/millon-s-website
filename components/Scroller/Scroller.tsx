import React from 'react'
import Card from '../Card/Card'
import "./Scroller.css"

const Scroller = () => {
  return (
    <div style={{background: "linear-gradient(90deg, #FFF4E6 10%, rgba(255, 244, 230, 0) 30%, rgba(255, 244, 230, 0) 70%, #FFF4E6 90%)"
    }} className='w-full h-[120px] md:h-[180px] bg-red-600 my-10 flex gap-4 overflow-x-auto hide-scrollbar z-10 relative scroller whitespace-nowrap'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Scroller