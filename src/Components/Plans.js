import React from 'react'
import PlansCard from '@/Layouts/PlansCard'
function Plans() {
    const props = {
        title : "Jayesh",
        price : 1000
    }
  return (
    
    <div className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center mb-10'>Gym membership</h1>
    <div className='flex space-x-5 rounded-2xl'>
        <PlansCard title = "Trail Plan" price = "0" className = "rounded-2xl"/>
        <PlansCard title = "Plus Plan" price = "3000"/>
        <PlansCard title = "Promax Plan" price = "5000"/>
    </div>
    </div>
  )
}

export default Plans
