import React from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
