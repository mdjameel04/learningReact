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

 {/* Highlights */}
      <div className="max-w-6xl mx-auto py-12 grid sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h2 className="text-xl font-semibold">🛏️ Luxury Rooms</h2>
          <p className="text-gray-600 mt-2">
            Spacious and modern rooms for your comfort.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h2 className="text-xl font-semibold">🍽️ Fine Dining</h2>
          <p className="text-gray-600 mt-2">
            Taste cuisines from around the world.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h2 className="text-xl font-semibold">🏊 Swimming Pool</h2>
          <p className="text-gray-600 mt-2">
            Refresh and relax in our luxury pool.
          </p>
        </div>
      </div>

      {/* About Preview */}
      <div className="bg-gray-50 py-12 text-center">
        <h2 className="text-2xl font-bold text-blue-600">About Us</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          At <span className="text-amber-500 font-semibold">My Hotel</span>, we
          aim to provide a luxurious stay with top-notch amenities and
          world-class hospitality.
        </p>
        <Link to="/about">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      </div>

    

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Book Your Stay?</h2>
        <Link to="/contact">
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </div>



    </div>
  )
}

export default Home
  




