import React, { useState } from 'react'
import { assets, NavItems } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <nav className='bg-white shadow-md w-full z-50 top-0 left-0 fixed'>
      <div className="flex items-center justify-between mx-auto p-4 max-w-6xl">
        {/* logo */}
        <div className='flex items-center gap-2'>
            <img className='w-20 h-20 cursor-pointer bg-cover ' src={assets.logo1 } alt="logo" />
            <h1 className='font-bold text-xl text-blue-600 mt-1' > My Hottel</h1>
        </div>

    {/* Desktop menu */}
    <ul className='hidden lg:flex gap-8 text-gray-700 font-medium'>
 {NavItems.map((item,index)=>(
    <li key={index}>
        <NavLink to={item.path} className={({isActive})=>
        `relative pb-1 transition ${
            isActive ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 "
            : "hover:text-blue-600"
        }`
        }>
           {item.name}  
        </NavLink>
    </li>
 ))}
    </ul>
{/* Sign In only fordesktop */}
   <div className='hidden lg:block'>
    <Link to='/signin' onClick={()=> setopen(false)}>
    <button className= 'px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600  text-white font-semibold rounded-4xl shadow-lg  hover:from-blue-600 hover:to-indigo-700   hover:shadow-xl transition-all duration-300 ease-in-out'>
      sign IN
    </button>
    </Link>
   </div>



     {/* mobile menu button */}
     <button className='lg:hidden' onClick={()=>setopen(!open)}>
     {open ? (
      <img src={assets.close_Icon} alt="" className='w-7 h-7 '/>)
    : ( 
      <img src={assets.menu_icon} alt="" className='w-7 h-7' />
    )
    }
     </button>


 </div>
    {/* mobile menu */}
    {open &&(
 
     <div className='lg:hidden bg-white shadow-md '>
    <ul className='flex flex-col gap-4 p-4 text-gray-700 font-medium'>
    {NavItems.map((item)=>(
      <li key={item.name}>
     <NavLink to={item.path} onClick={()=> setopen(false)} className={({isActive})=>
    `block relative pb-1 ${
      isActive ? "text-blue-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 "
      : "text-gray-700"
    }`
    }>
      {item.name}
     </NavLink>
      </li>
    ))}
    </ul>

<Link to="/signin" onClick={()=> setopen(false)}>
    <button className=  'px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600  text-white font-semibold rounded-4xl shadow-lg  hover:from-blue-600 hover:to-indigo-700   hover:shadow-xl   transition-all duration-300 ease-in-out'> 
    Sign IN
    </button>
</Link>
     </div>
    )}


    </nav>
  )
}

export default Navbar
