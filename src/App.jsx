import React from 'react'
import Navbar from './Components/Navbar'
import SignIn from './Pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
<Navbar/>
        <div className='pt-24'>
<Routes>
  <Route path='/signin' element={<SignIn/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/service' element={<Service/>} />
  <Route path='/contact' element={<Contact/>} />

</Routes>
    </div>
        </div>
  )
}

export default App
