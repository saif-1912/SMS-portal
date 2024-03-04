import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>      
      <Header />
      <Outlet />
    </div>
  )
}
