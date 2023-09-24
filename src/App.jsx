import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Sections/Header'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Resume from './Sections/Resume'
import Portfolio from './Sections/Portfolio'
import Contact from './Sections/Contact'
function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
