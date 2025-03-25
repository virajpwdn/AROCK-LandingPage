import React from 'react'
import ChildLoader from './ChildLoader'

const ParentLoader = () => {
  return (
    <div className='h-2 w-full bg-transparent rounded-md fixed z-50'>
        <ChildLoader />
    </div>
  )
}

export default ParentLoader