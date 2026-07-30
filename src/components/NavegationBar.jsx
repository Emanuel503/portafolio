import { useState } from "react";
import { BiSolidMoon, BiSolidSun, BiSolidCommentDots, BiCodeBlock, BiSolidGraduation, BiSolidHappy, BiChevronDown  } from "react-icons/bi";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { RiCodeView } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";

export default function NavegationBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { text, language, changeLanguage } = useLanguage();

  const [mode, setMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  const chageModo = () => {
    setMode(!mode)
    if(mode){
      document.body.classList.remove('dark')
    }else{
      document.body.classList.add('dark')
    }
  }

  const closeNavBarMobile = () => {
    setIsMenuOpen(false)
  }

  const languages = {
      es: {
          label: "Español",
          flag: "ES",
      },
      en: {
          label: "English",
          flag: "EN",
      },
  };

  return (
    <Navbar className="bg-colormind-title" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? text.navbar.closemenu : text.navbar.openmenu}
            className="md:hidden text-colormind-text"
          />
          <NavbarBrand className="hidden lg:flex">
            <p className="font-bold text-2xl text-colormind-text">{text.portfolio}</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <Link className="text-colormind-text text-lg " aria-current="page" href="#about">
                <BiSolidHappy className="mr-2" />{text.navbar.about}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#proyects">
                <BiCodeBlock className="mr-2" />{text.navbar.projects}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#technologies">
                <RiCodeView className="mr-2" />{text.navbar.technologies}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#studies-skills">
                <BiSolidGraduation className="mr-2" />{text.navbar.studies}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#works">
                <FaBuilding className="mr-2" />{text.navbar.works}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-colormind-text text-lg" aria-current="page" href="#contact">
                <BiSolidCommentDots className="mr-2" /> {text.navbar.contact}
              </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button className="text-2xl" isIconOnly variant="shadow" onClick={ () => chageModo() }>
              { mode ? <BiSolidSun /> : <BiSolidMoon /> }
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                  <Button
                      variant="shadow"
                      endContent={<BiChevronDown size={18} />}
                  >
                      {languages[language].flag}
                  </Button>
              </DropdownTrigger>

              <DropdownMenu
                  aria-label="Seleccionar idioma"
                  selectedKeys={[language]}
                  selectionMode="single"
                  onAction={(key) => changeLanguage(key)}
                  className="text-colormind-text"
              >
                  <DropdownItem key="es">
                      Español
                  </DropdownItem>

                  <DropdownItem key="en">
                      English
                  </DropdownItem>
              </DropdownMenu>

            </Dropdown>
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
                <BiSolidHappy className="mr-2" />{text.navbar.about}
              </Link>
            </NavbarItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#proyects"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiCodeBlock className="mr-2" />{text.navbar.projects}
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#technologies"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <RiCodeView className="mr-2" />{text.navbar.technologies}
              </Link>
            </NavbarMenuItem>

             <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#works"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <FaBuilding className="mr-2" />{text.navbar.works}
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#studies-skills"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiSolidGraduation className="mr-2" />{text.navbar.studies}
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem >
              <Link
                className="text-colormind-text w-full font-bold border-b-1 p-1.5 mb-2 border-colormind-text hover:bg-colormind-hover hover:translate-x-2 transition duration-1000"
                href="#contact"
                size="lg"
                onClick={() => closeNavBarMobile()}
              >
                <BiSolidCommentDots className="mr-2" />{text.navbar.contact}
              </Link>
            </NavbarMenuItem>
        </NavbarMenu>
    </Navbar>
  );
}