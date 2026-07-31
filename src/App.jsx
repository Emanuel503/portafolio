import NavegationBar from './components/NavegationBar'
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import StudiesSection from "./components/StudiesSection";
import ContactSection from "./components/ContactSection";
import LateralContacs from "./components/LateralContacs";
import Arrows from "./components/Arrows";
import TechnologiesSection from './components/TechnologiesSection';
import JobsSection from './components/JobsSection';

export default function App() {
  
  return (
    <>
      <NavegationBar />
      
      <main >
        <AboutSection/>

        <ProjectsSection/>

        <TechnologiesSection/>

        <StudiesSection/>

        <JobsSection/>

        <ContactSection/>
      </main>

      <Arrows/>

      <LateralContacs/>
    </>
  );
}