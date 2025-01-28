import React from 'react'
import Card from '../Card/Card'
import "./Scroller.css"

const Scroller = () => {
  return (
    <div className='overflow-x-auto w-full relative'>
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
      <div style={{background: "linear-gradient(90deg, #FFF4E6 10%, rgba(255, 244, 230, 0) 30%, rgba(255, 244, 230, 0) 70%, #FFF4E6 90%)"
      }} className='h-[120px] md:h-[180px] my-10 w-full bg-red-600 absolute inset-0 z-20 pointer-events-none'></div>
    </div>
  )
}

export default Scroller