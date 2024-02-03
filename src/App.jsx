import { useState } from "react";

import BarraBusqueda from './components/BarraBusqueda'
import AboutSection from "./components/AboutSection";
import Proyects from "./components/Proyects";
import StudiesSkills from "./components/StudiesSkills";
import Contact from "./components/Contact";
import { FaArrowDown, FaArrowUp  } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export default function App() {
  
  const [modo, setmodo] = useState(true)

  const [section, setSection] = useState()

  const chageModo = () => {
    setmodo(!modo)
  }

  const bajar = (e, type) => {
    let currentSection = document.querySelector("section:target") || document.querySelector("section:first-of-type");
    let nextSection;
    
    if(type == 'down'){
      nextSection = currentSection.nextElementSibling || document.querySelector("section:first-of-type");
    }else{
      nextSection = currentSection.previousElementSibling || document.querySelector("section:last-of-type")
    }

    setSection(nextSection.id)
    window.location.href = `#${nextSection.id}`
    nextSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className={modo ? 'dark bg-colormind-background h-full': 'light bg-colormind-background h-full'}>
      <BarraBusqueda 
        chageModo={chageModo}
        modo={modo}
      />
      
      {section !== 'contact' && 
        <Button className="rounded-full fixed right-0 m-8 z-20 bg-colormind-button animate-bounce" onClick={(e) => bajar(e, 'down')} isIconOnly aria-label="Bajar">
          <FaArrowDown />
        </Button> 
      }

      <AboutSection/>

      <Proyects/>

      <StudiesSkills/>

      <Contact/>

      {section !== 'about' && 
        <Button className="rounded-full fixed right-0 bottom-0 m-8 z-20 bg-colormind-button animate-bounce" onClick={(e) => bajar(e, 'up')} isIconOnly aria-label="Bajar">
          <FaArrowUp />
        </Button>
      }

    </main>
  );
}
