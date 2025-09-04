import React from 'react'
import { assets, reviews } from '../assets/assets'

const About = () => {
  return (
    <div className='p-10 max-w-5xl mx-auto'>
        {/* intro */}
        <h1 className='text-2xl text-blue-600 text-center font-bold'>About us</h1>
      <p className='text-center mt-4 text-gray-600'> 
  Welcome to <span className="font-semibold text-amber-500">My Hotel</span>! We provide the best rooms
        and world-class services for our guests. Our goal is to make your stay memorable.
      </p>

    {/* highlights */}
   <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center'>

   <div className="p-6 shadow-lg rounded-2xl">
    <h2 className='text-xl font-semibold'>🏊 Swimming Pool</h2>
    <p className='text-gray-600 mt-2'>Relax and enjoy your pool.</p>
   </div>
   <div className='p-6 shadow-lg rounded-2xl'> 
    <h2 className='text-xl font-medium'>🍽 Fine Dining</h2>
    <p className="text-gray-600 mt-2">Delicious cuisines from around the world.</p>
   </div>
 <div className='shadow-lg p-6 rounded-2xl'>
<h2 className='font-medium text-xl'> 🚗 Free Parking</h2>
<p className='text-gray-600 mt-2'>Spacious and secure parking facilities. </p>
 </div>

 <div className='p-6 shadow-xl rounded-2xl '>
<h2 className='text-xl font-medium'>🛏️ Best Room's </h2>
<p className='text-gray-600 mt-2'> Rooms are clean and Hygienic</p>
 </div>
   </div>
   {/* Reviews */}

<h2 className='text-2xl font-bold mt-12 mb-4 text-center'> What's <span className=''>Our Guests</span>  Say</h2>

<div className='grid sm:grid-cols-3 gap-6'>
{reviews.map((item, index)=>(
    <div key={index} className='p-6 shadow-md rounded-xl  hover:shadow-xl bg-white transition duration-300'>
<h3 className='font-semibold text-blue-600'>{item.name} </h3>
<p className='text-yellow-500'>
    {"⭐".repeat(item.rating)} {""}
    <span className='text-gray-400'>
        {5 - item.rating > 0 ? "☆".repeat(5 - item.rating) : ""}
    </span>
</p>
<p className='mt-2 text-gray-600'> {item.comment} </p>
    </div>
))}
</div>

{/* Team Section */}
<h2 className="text-2xl font-bold mt-12 mb-6 text-center">Meet Our Team</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
  <div className="p-6 shadow-lg rounded-xl bg-white">
    <img src={assets.manager} alt="Manager" className="w-32 h-32 rounded-full mx-auto object-cover" />
    <h3 className="mt-4 font-semibold text-gray-800">Jameel</h3>
    <p className="text-sm text-gray-500">CEO</p>
  </div>

  <div className='p-6 shadow-lg rounded-xl bg-white hover:scale-105 transition duration-300 ease-in-out text-center'>
<img src={assets.staff} alt="" className='w-32 h-32 rounded-full object-cover mx-auto ' />
<h3 className=' font-semibold mt-4 text-gray-800'>Our team</h3>
<p className='text-sm text-gray-500 '> hotel staff</p>
  </div>
</div>

{/* our mission */}

<div className='mt-12 text-center'>
<h2 className='text-2xl font-bold mb-4 '>  Our Mission</h2>
<p className='text-gray-600 max-w-3xl mx-auto '> To provide our guests with unforgettable experiences through 
    exceptional hospitality, world-class services, and a touch of luxury. </p>

    <h2 className='text-2xl text-center mt-8 mb-4'> Our Vision</h2>
    <p className='text-gray-600 max-w-3xl mx-auto'>
        To be Hyderabad’s most loved hotel, where every stay feels like home.
    </p>
</div>

{/* location map */}
<h2 className='text-2xl font-bold mt-12 mb-6 text-center'> Find us</h2>

<div className='rounded-xl overflow-hidden shadow-lg'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2299986666843!2d78.48667181538212!3d17.385044888075665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97542f7d8e6d%3A0x4d78e0d9373e3f97!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704711111111!5m2!1sen!2sin"
width="100%"
height="350"
loading='lazy'
allowFullScreen=""

className='border-0 w-full' 
>
</iframe>
</div>

<div></div>

    </div>
  )
}

export default About



