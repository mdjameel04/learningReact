import React, { useState } from 'react'
import { assets } from '../assets/assets'

const SignIn = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit =(e)=>{
 e.preventDefault()  // page reload ko rokta hai
 console.log(email);
 console.log(password)
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-xl ' > 
    {/* logo */}

    <div className='text-center mb-8'> 
  <img src={assets.knife_logo} alt=""  className='w-16 h-16 mx-auto'/>
  <h1 className='text-2xl font-bold text-gray-700 mt-4'> welcome back</h1>
  <p className='text-gray-700 text-sm'>SignIN to continue</p>
    </div>

   {/* form */}
 <form className='space-y-5' onSubmit={handleSubmit}>
    <div>
        <label htmlFor='email' className='block text-gray-600 font-medium mb-1'>Email</label>
 <input id='email' type="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setemail(e.target.value)} className='w-full px-4 py-2 rounded-lg focus:ring-2 border focus:ring-blue-600 outline-none' required />
    </div>

<div>
    <label htmlFor='password' className='block font-medium text-gray-700 mb-1'>Password</label>
<input id='password' type="password" placeholder='Enter Your Password' value={password} onChange={(e)=> setpassword(e.target.value) } className='w-full px-4 py-2 focus:ring-2 focus:ring-blue-600 border rounded-lg outline-none' required/>
</div>
{/* buttons */}
 <button className='w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:to-indigo-700 transition duration-300' type='submit'>
  Sign In
 </button>
 </form>

 {/* divider */}
   
   <div className='flex items-center my-6'>
    <div className='flex-grow h-px bg-gray-300'></div>
    <span className='px-3 text-gray-400 text-sm'> or</span>
    <div className='flex-grow h-px bg-gray-300'></div>
   </div>

{/* login */}

<button className='w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-gray-100 transition '>
<img src={assets.google_logo} alt="" className='w-5 h-5 bg-cover'/> 
Sign in with google
</button>

{/* extra links */}

<div className='flex justify-between mt-6 text-sm text-blue-600'>
<a href="/forgot-password" className='hover:underline' > Forgot-Password</a>
<a href="/Create-Account" className='hover:underline' > Create-Account</a>
</div>
      </div>
    </div>
  )
}

export default SignIn
