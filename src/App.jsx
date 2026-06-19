import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/home'
import About from './screens/about'
import Sessions from './screens/sessions'
import Overview from './screens/overview'
import Pay from './screens/pay'
import Ticket from './screens/ticket'
import Profile from './screens/profile'
import Paymentform from './screens/paymentform'




import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/paymentform" element={<Paymentform />} />



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
