import { useState } from "react";

import BarraBusqueda from './components/BarraBusqueda'

export default function App() {
  
  const [modo, setmodo] = useState(true)

  const chageModo = () => {
    setmodo(!modo)
  }

  return (
    <main className={modo ? 'dark bg-colormind-background h-screen': 'light bg-colormind-background h-screen'}>
      <BarraBusqueda 
        chageModo={chageModo}
        modo={modo}
      />
    </main>
  );
}
