import React from 'react'
import JobPreview from './JobPreview'
import Siderbar from './Sidebar'

function Body() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-9'>
        <JobPreview />
      </div>
      <div className='col-span-3'>
        <Siderbar />
      </div>
    </div>
  )
}

export default Body


{/* <div className='grid grid-cols-12'>
      <div className='col-span-9'>
        <JobDesc />
      </div>
      <div className='col-span-3'>
        <Siderbar />
      </div>
    </div> */}
