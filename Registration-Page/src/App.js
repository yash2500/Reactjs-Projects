import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FAN_SIGNUP from './components/FAN_SIGNUP'
import Layout from './components/Layout'
import TALENAT_SIGNUP from './components/TALENAT_SIGNUP'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Card className="card w-25 m-auto mt-5 p-2 bg-dark text-light">
    <Layout />
      <Routes>
        <Route path='/' element={<FAN_SIGNUP />} />
        <Route path='/talenat_signup' element={<TALENAT_SIGNUP />} />
      </Routes>
      
    </Card>
    </BrowserRouter>
      
    </>
  )
}

export default App