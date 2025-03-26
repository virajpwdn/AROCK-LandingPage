import React from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

const Menu = () => {
  return (
    <div className='bg-[#1A1A1A] h-full w-full fixed top-0 p-5 flex justify-between z-50'>
        <MenuLeft />
        <MenuRight />
    </div>
  )
}

export default Menu