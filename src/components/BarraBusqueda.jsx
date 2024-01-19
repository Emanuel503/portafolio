import { useState } from "react";
import PropTypes from 'prop-types'
import { BiSolidMoon, BiSolidSun, BiSolidCommentDots, BiCodeBlock, BiSolidBoltCircle, BiSolidGraduation, BiSolidHappy  } from "react-icons/bi";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function BarraBusqueda({chageModo, modo}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className="bg-colormind-title" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-colormind-text"
          />
          <NavbarBrand>
            <p className="font-bold text-colormind-text">Portafolio</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem  >
              <Link className="text-colormind-text" aria-current="page" href="#about">
                <BiSolidHappy  className="mr-2" />Sobre Mi
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link className="text-colormind-text" aria-current="page" href="#proyects">
                <BiCodeBlock className="mr-2" />Proyectos
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link className="text-colormind-text" aria-current="page" href="#studies">
                <BiSolidGraduation className="mr-2" />Estudios
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link className="text-colormind-text" aria-current="page" href="#skills">
                <BiSolidBoltCircle className="mr-2" />Habilidades
              </Link>
            </NavbarItem>
            <NavbarItem  >
              <Link className="text-colormind-text" aria-current="page" href="#contact">
              <BiSolidCommentDots className="mr-2" /> Contacto
              </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly variant="shadow" onClick={ () => chageModo() }>
              { modo ? <BiSolidSun /> : <BiSolidMoon /> }
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
              <Link
                className="text-colormind-text w-full"
                href="#"
                size="lg"
              >
                Sobre mi
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