import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [modo, setmodo] = useState(true)

  const chageModo = () => {
    setmodo(!modo)
  }

  const menuItems = [
    "Sobre Mi",
    "Proyectos",
    "Estudios",
    "Habilidades",
    "Contacto",
  ];

  return (
    <main className={modo ? 'dark bg-colormind-background h-screen': 'light bg-colormind-background h-screen'}>
      <Navbar className="bg-colormind-title" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-colormind-text">Portafolio</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem  >
              <Link color="foreground" aria-current="page" href="#about">
                Sobre Mi
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link color="foreground" aria-current="page" href="#proyects">
                Proyectos
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link color="foreground" aria-current="page" href="#studies">
                Estudios
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link color="foreground" aria-current="page" href="#skills">
                  Habilidades
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link color="foreground" aria-current="page" href="#contact">
                Contacto
              </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly variant="shadow" onClick={ () => chageModo() }>
              x
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </main>
  );
}
