import React from 'react'
import ChildLoader from './ChildLoader'

const ParentLoader = () => {
  return (
    <div className='h-2 w-full bg-transparent rounded-md fixed'>
        <ChildLoader />
    </div>
  )
}

export default ParentLoader