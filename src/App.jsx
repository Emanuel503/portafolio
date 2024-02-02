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

  const [scroll, setScroll] = useState(window.scrollY)

  const chageModo = () => {
    setmodo(!modo)
  }

  window.addEventListener("scroll", function() {
    setScroll(window.scrollY);
  });

  const bajar = () => {
    var currentSection = document.querySelector("section:target") || document.querySelector("section:first-of-type");
    var nextSection = currentSection.nextElementSibling || document.querySelector("section:first-of-type");

    nextSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className={modo ? 'dark bg-colormind-background h-full': 'light bg-colormind-background h-full'}>
      <BarraBusqueda 
        chageModo={chageModo}
        modo={modo}
      />

      <Button className="rounded-full fixed right-0 m-8 z-20 bg-colormind-button animate-bounce" onClick={(e) => bajar(e)} isIconOnly aria-label="Bajar">
        <FaArrowDown />
      </Button> 

      <AboutSection/>

      <Proyects/>

      <StudiesSkills/>

      <Contact/>

      {scroll > 10 && 
        <Button className="rounded-full fixed right-0 bottom-0 m-8 z-20 bg-colormind-button animate-bounce" isIconOnly aria-label="Bajar">
          <FaArrowUp />
        </Button>
      }

    </main>
  );
}
