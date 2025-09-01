import React from 'react'
import Navbar from './Components/Navbar'
import SignIn from './Pages/SignIn'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
   <Navbar/>
<Routes>
  <Route path='/signin' element={<SignIn/>} />
</Routes>
    </div>
  )
}

export default App
