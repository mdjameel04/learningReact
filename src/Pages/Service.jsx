import React from 'react'
import { services } from '../assets/assets'

const Service = () => {
  return (
    <div  className=' p-10 max-w-6xl mx-auto'>
        {/* intro */}
     <h1 className='font-bold text-3xl text-blue-600 text-center'>Our Service </h1>
     <p className='text-sm text-gray-600 mt-4'>
         At <span className="text-amber-500 font-semibold">My Hotel</span>, we offer
        premium services to make your stay comfortable and memorable.
     </p>
{/* Services */}
     <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10'>
     {services.map((item,index)=>(
       <div key={index} className='p-6 shadow-lg rounded-2x bg-white hover:shadow-xl transition duration-300 text-center  '>
<div className="text-4xl">{item.icon} </div>
<h1 className='text-xl font-semibold mt-4 '>{item.title} </h1>
<p className='text-gray-600 mt-2'>{item.desc} </p>
       </div> 
     ))}
     </div>
{/* CTA */}
<div className="text-center mt-12">
    <button className=' px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all'>
  Book Now
    </button>
</div>
    </div>
  )
}

export default Service 
