//import { useState } from 'react'
import './App.css'

import HomePage from "./pages/home-page.jsx"
import Nav from "./pages/nav.jsx"
import Footer from "./pages/footer.jsx"
import About from './pages/about.jsx'

function App() {
  

  return (
    <>
      <Nav/>
      <HomePage/>
      <About/>
      <Footer/>
      
    </>
  )
}

export default App
