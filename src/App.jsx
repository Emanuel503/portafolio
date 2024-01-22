import { useState } from "react";

import BarraBusqueda from './components/BarraBusqueda'
import AboutSection from "./components/AboutSection";
import Proyects from "./components/Proyects";
import StudiesSkills from "./components/StudiesSkills";

export default function App() {
  
  const [modo, setmodo] = useState(true)

  const chageModo = () => {
    setmodo(!modo)
  }

  return (
    <main className={modo ? 'dark bg-colormind-background h-full': 'light bg-colormind-background h-full'}>
      <BarraBusqueda 
        chageModo={chageModo}
        modo={modo}
      />

      <AboutSection/>

      <Proyects/>

      <StudiesSkills/>

    </main>
  );
}
