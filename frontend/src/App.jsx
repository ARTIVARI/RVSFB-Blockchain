import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Signin from './Components/Signin'
import Home from './Components/Candidatepages/Home'
import Cadilist from './Components/Candidatepages/Cadilist'

const App=()=> {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='/dashboard' element={<Home/>}></Route>
            <Route path='/dashboard/candilistss' element={<Cadilist/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App