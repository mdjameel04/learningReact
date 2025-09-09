import React from 'react'
import {Link} from 'react-router-dom'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${assets.hotel})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to my Hotel</h1>
          <p className="mt-4 text-lg">Luxury • Comfort • World-class Services</p>
          
         <Link to={'/Service'}>
         <button className='mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition '>
            Explore Services
         </button>
         </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Home
  




