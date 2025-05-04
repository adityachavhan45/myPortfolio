import { useState, useEffect } from 'react'
import './App.css'

// Import Components
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--primary-color)] text-white overflow-hidden">
      {/* Background gradient with improved mobile compatibility */}
      <div className="fixed top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--purple-color)]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[var(--pink-color)]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4">
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
