import BarraBusqueda from './components/NavegationBar'
import AboutSection from "./components/AboutSection";
import Proyects from "./components/Proyects";
import StudiesSkills from "./components/StudiesSkills";
import Contact from "./components/Contact";
import LateralContacs from "./components/LateralContacs";
import Arrows from "./components/Arrows";
import Technologies from './components/Technologies';

export default function App() {
  
  return (
    <>
      <BarraBusqueda />
      
      <main >
        <AboutSection/>

        <Proyects/>

        <Technologies/>

        <StudiesSkills/>

        {/* TODO: agregar seccion de experiencia/trabajos */}

        <Contact/>
      </main>

      <Arrows/>

      <LateralContacs/>
    </>
  );
}