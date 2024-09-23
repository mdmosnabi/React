import React, { useState, useEffect, useContext } from 'react'
import { tokenContex, BookContex } from './contexHook/Contex'
import Login from './component/Login'
import Home from './component/Home'
import Chart from './component/Chart'
import Curdop from './component/Cursop'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './component/Navbar'
import Catagori from './component/Catagori'
import Footer from './component/Footer'
import Test from './component/Test'

const App = () => {
  const [showData, setshowData] = useState([])
  const [token, setToken] = useState(() => {
    const a = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null
    if (a != null) {
      return JSON.parse(a)
    }
    return { refresh: '', access: '' }
  })

  return (
    <>
      <BookContex.Provider value={{ showData, setshowData }}>
        <tokenContex.Provider value={{ token, setToken }}>
          <Router>
            <div className=' bg-gray-900 text-white overflow-auto md:h-[100vh] h-[92vh]'>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/catagori' element={<Catagori />} />
                <Route path='/chart' element={<Chart />} />
                <Route path="/account" element={<Login />} />
                <Route path="/test" element={<Test/>} />
              </Routes>

            </div>
              <Footer />
          </Router>
        </tokenContex.Provider>
      </BookContex.Provider>
    </>
  )
}

export default App
