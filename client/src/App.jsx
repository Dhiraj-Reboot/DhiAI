import React, { useState } from 'react'
import SideBar from './components/SideBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Chatbox from './components/Chatbox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import { assets } from './assets/assets'
import './assets/prism.css'
import Loading from './pages/Loading'
import { useAppContext } from './context/AppContext'
import Login from './pages/Login'
const App = () => {
  const {user} = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {pathname} = useLocation()
  if(pathname === '/loading') return <Loading/>
  return (
    <>
    {!isMenuOpen && <img src={assets.menu_icon} className=' absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert' onClick={()=>setIsMenuOpen(true)}/>}
    {user ? (
 <div className="h-screen w-screen flex dark:bg-gradient-to-b dark:from-[#242124] dark:to-[#000000] dark:text-white bg-white text-black transition-colors duration-500">
      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<Chatbox />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
    ) : (
      <div className='bg-gradient-to-b from-[#242124] to-[#000000] flex items-center justify-center h-screen w-screen'>
        <Login/>
      </div>
    )}
   
    </>
  )
}

export default App
