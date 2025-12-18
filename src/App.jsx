import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Vans from './pages/vans'
import VanDetail from './pages/vanDetail'
import Header from "./components/header"



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route
      path='/'
      element={<Home/>}
      />

      <Route
      path='/about'
      element={<About/>}
      />

      <Route
      path='/vans'
      element={<Vans/>}
      />

      <Route
        path="/vans/:id"
         element={<VanDetail/>} 
      />
    </Routes>
    </>
  )
}

export default App
