import React from 'react'
import { packages, services } from '../assets/assets'

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

     <h2 className='text-2xl font-bold mt-16 text-center'> Special Packages</h2>
  <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6' >
{packages.map((item,index)=>(
    <div className='p-6 shadow-xl rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl transition ' key={index}>
  <h3 className='text-xl font-semibold text-blue-700 '>{item.name } </h3>
  <p className="text-lg font-bold text-gray-800 mt-2">{item.price} </p>
     <ul className='mt-3 text-gray-600 list-disc list-inside'>
        {item.features.map((feature,i)=>(
            <li key={i}>
                {feature}
            </li>
        ))}
     </ul>
    </div>
))}
  </div>


  {/* why you choose us */}
<h2 className='text-2xl text-center font-bold mt-16 '> Why you choose us ?</h2>
 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-lg text-blue-600">24/7 Support</h3>
          <p className="text-gray-600 mt-2">We are available anytime for your assistance.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-lg text-blue-600">Affordable Luxury</h3>
          <p className="text-gray-600 mt-2">Luxury experience at budget-friendly prices.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-lg text-blue-600">Trusted by Guests</h3>
          <p className="text-gray-600 mt-2">Rated 4.8★ by 500+ happy guests worldwide.</p>
        </div>
      </div>

{/* CTA */}
<div className="text-center mt-12">
    <button className=' px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all'>
  Book Your Stay
    </button>
</div>
    </div>
  )
}

export default Service 
