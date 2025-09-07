import React from 'react'
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
        </div>
      </div>
    </div>
  )
}

export default Home
  




