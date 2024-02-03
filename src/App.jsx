import { useState } from "react";
import BarraBusqueda from './components/NavegationBar'
import AboutSection from "./components/AboutSection";
import Proyects from "./components/Proyects";
import StudiesSkills from "./components/StudiesSkills";
import Contact from "./components/Contact";
import LateralContacs from "./components/LateralContacs";
import Arrows from "./components/Arrows";

export default function App() {
  
  const [modo, setmodo] = useState(true)

  const chageModo = () => {
    setmodo(!modo)
  }

  return (
    <main className={modo ? 'dark bg-colormind-background': 'light bg-colormind-background '}>
      <BarraBusqueda 
        chageModo={chageModo}
        modo={modo}
      />
      
      <AboutSection/>

      <Proyects/>

      <StudiesSkills/>

      <Contact/>

      <Arrows/>

      <LateralContacs/>

    </main>
  );
}
