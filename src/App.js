import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bin from './Components/Bin/Bin'
import Computer from './Components/Computer/Computer'
import Error from './Components/Error'
import Mydrive from './Components/MyDrive/Mydrive'
import Navbar from "./Components/Navbar/Navbar"
import Recent from './Components/Recent/Recent'
import SharedWM from './Components/SharedWM/SharedWM'
import Starred from './Components/Starred'
import Storage from './Components/Storage/Storage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/bin' element={<Bin />} />
          <Route path='/starred' element={<Starred />} />
          <Route path='/recent' element={<Recent />} />
          <Route path='/Shared_with_me' element={<SharedWM />} />
          <Route path='/my_drive' element={<Mydrive />} />
          <Route path='/storage' element={<Storage />} />
          <Route path='/Computer' element={<Computer />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
