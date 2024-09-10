import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import AboutMe from './Components/AboutMe/AboutMe';
import Project from './Components/Projects/Project';
import Experience from './Components/Experience/Experience';
import ContactMe from './Components/ContactMe/ContactMe';
import ProjectMain from './Components/Projects/ProjectMain'; // Import your new component

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<>
          <Header />
          <HeroSection />
          <AboutMe />
          <Project />
          <Experience />
          <ContactMe />
        </>} />
        <Route path="/projectmain" element={<ProjectMain />} />
      </Routes>
    </Router>
  );
}

export default App;
