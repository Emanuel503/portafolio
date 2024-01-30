import { useState } from "react";
import PropTypes from 'prop-types'
import { BiSolidMoon, BiSolidSun, BiSolidCommentDots, BiCodeBlock, BiSolidGraduation, BiSolidHappy  } from "react-icons/bi";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function BarraBusqueda({chageModo, modo}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeNavBarMobile = () => {
    setIsMenuOpen(false)
  }

  return (
    <Navbar className="bg-colormind-title" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-colormind-text"
          />
          <NavbarBrand className="hidden lg:flex">
            <p className="font-bold text-2xl text-colormind-text">Portafolio</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <Link className="text-colormind-text text-lg " aria-current="page" href="#about">
                <BiSolidHappy className="mr-2" />Sobre Mi
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#proyects">
                <BiCodeBlock className="mr-2" />Proyectos
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#studies-skills">
                <BiSolidGraduation className="mr-2" />Estudios/Habilidades
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#contact">
                <BiSolidCommentDots className="mr-2" /> Contacto
              </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button className="text-2xl" isIconOnly variant="shadow" onClick={ () => chageModo() }>
              { modo ? <BiSolidSun /> : <BiSolidMoon /> }
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-colormind-navmobile">
          <NavbarItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#about"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiSolidHappy className="mr-2" />Sobre Mi
              </Link>
            </NavbarItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#proyects"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiCodeBlock className="mr-2" />Proyectos
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#studies-skills"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiSolidGraduation className="mr-2" />Estudios/Habilidades
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#studies"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiSolidCommentDots className="mr-2" />Contacto
              </Link>
            </NavbarMenuItem>
        </NavbarMenu>
    </Navbar>
  );
}

BarraBusqueda.propTypes = {
  chageModo: PropTypes.func.isRequired,
  modo: PropTypes.bool.isRequired
}