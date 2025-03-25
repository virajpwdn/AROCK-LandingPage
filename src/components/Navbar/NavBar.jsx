import React from 'react'
import Right from './Right';
import Left from './left';


const NavBar = () => {
  return (
    <div className='flex justify-between px-4'>
      <Left />
      <Right />
    </div>
  )
}

export default NavBar