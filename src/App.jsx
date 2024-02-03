import BarraBusqueda from './components/NavegationBar'
import AboutSection from "./components/AboutSection";
import Proyects from "./components/Proyects";
import StudiesSkills from "./components/StudiesSkills";
import Contact from "./components/Contact";
import LateralContacs from "./components/LateralContacs";
import Arrows from "./components/Arrows";

export default function App() {
  
  return (
    <>
      <BarraBusqueda />
      
      <main >
        <AboutSection/>

        <Proyects/>

        <StudiesSkills/>

        <Contact/>
      </main>

      <Arrows/>

      <LateralContacs/>
    </>
  );
}