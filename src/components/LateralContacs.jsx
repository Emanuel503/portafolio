import { FaLinkedinIn, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { Link, Button } from "@nextui-org/react";
import { BiLogoGithub  } from "react-icons/bi";

export default function LateralContacs() {
  return (
    <div className="grid grid-cols-12 h-60 w-20 fixed z-20 top-1/2 -translate-y-1/2 -left-10 hover:left-0 transition-all" >
        <div className="col-span-7 bg-colormind-secondary rounded-r-xl flex flex-col items-center justify-center gap-3">
            <Button title="GitHub" size="sm" isIconOnly href='https://github.com/Emanuel503' as={Link} className="bg-colormind-button text-colormind-text rounded-full text-2xl" aria-label="GitHub">
              <BiLogoGithub />
            </Button>

            <Button title="LinkedIn" size="sm" isIconOnly href='https://www.linkedin.com/in/emanuel-molina-3b30142aa/' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-xl" aria-label="LinkedIn">
              <FaLinkedinIn />
            </Button>  

            <Button title="Instagram" size="sm" isIconOnly href='https://www.instagram.com/emanuelmz_/?hl=es-la' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-xl" aria-label="Instagram">
              <FaInstagram />
            </Button>  

            <Button title="Whatsapp" size="sm" isIconOnly href='tel:+50361141786' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-xl" aria-label="Whatsapp">
              <FaWhatsapp />
            </Button>  
        </div>

        <div className="col-span-5">
        </div>
      </div>
  )
}