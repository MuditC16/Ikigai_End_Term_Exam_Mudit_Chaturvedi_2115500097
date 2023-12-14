import React from 'react'
import MainTodo from './component/MainTodo'
import Calculator from './component/Calculator'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import Fotter from './component/Fotter'
import Social_Media from './component/Social_Media'
import Location from './component/Location'

export default function App() {
  return (
    <div>
      <NavBar/>
      <div className='h-[86vh]'>

       <Routes>
          <Route path="/" element={<MainTodo />} />
          <Route path="/cal" element={<Calculator />} />
          <Route path="/social" element={<Social_Media />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
<Fotter/>

    </div>
  )
}
