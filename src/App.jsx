import React from 'react'
import Navbar from './Components/Navbar'
import SignIn from './Pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'

const App = () => {
  return (
    <div>
<Navbar/>
        <div className='pt-24'>
<Routes>
  <Route path='/signin' element={<SignIn/>} />
  <Route path='/about' element={<About/>} />
</Routes>
    </div>
        </div>
  )
}

export default App
