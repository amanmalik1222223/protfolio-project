import { useState } from 'react'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection';
import AboutMe from './Components/AboutMe/AboutMe';
import Project from './Components/Projects/Project';
import Experience from './Components/Experience/Experience';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>
    <HeroSection/>
    <AboutMe/>
    <Project/>
    <Experience/>
    <ContactMe/>
    </>
  )
}

export default App
