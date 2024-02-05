import { Button, Link, Tooltip } from "@nextui-org/react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { BiLogoGithub  } from "react-icons/bi";

export default function Contact() {
  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64 text-colormind-text pb-20" id="contact">
        <h1 className="text-4xl font-bold text-center mb-10">Contacto</h1>

        <div className="w-full h-auto px-10 py-28 bg-colormind-cards rounded-2xl md:grid grid-cols-12 mt-20 ">
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center lg:items-start mb-10 lg:mb-0">
                <h2 className="text-5xl font-bold mb-8">Escríbeme</h2>
                <div>
                  <label className="font-semibold">Email: </label>
                  <Tooltip placement="top" className="text-colormind-text bg-colormind-primary" showArrow={true} content="Enviar Email">
                    <a className="text-lg hover:underline underline-offset-2 transition-all" href="mailto:emanueljosemolina@gmail.com">emanueljosemolina@gmail.com</a>
                  </Tooltip>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-8 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold mb-8 text-center">Redes sociales</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Tooltip placement="bottom" className="text-colormind-text bg-colormind-primary" showArrow={true} content="GitHub">
                    <Button size="lg" isIconOnly href='https://github.com/Emanuel503' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-2xl hover:scale-110" aria-label="GitHub">
                      <BiLogoGithub />
                    </Button>
                  </Tooltip>

                  <Tooltip placement="bottom" className="text-colormind-text bg-colormind-primary" showArrow={true} content="LinkedIn">
                    <Button size="lg" isIconOnly href='https://www.linkedin.com/in/emanuel-molina-3b30142aa/' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-xl hover:scale-110" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </Button>
                  </Tooltip>  

                  <Tooltip placement="bottom" className="text-colormind-text bg-colormind-primary" showArrow={true} content="Instagram">
                    <Button size="lg" isIconOnly href='https://www.instagram.com/emanuelmz_/?hl=es-la' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-xl hover:scale-110" aria-label="Instagram">
                      <FaInstagram />
                    </Button>
                  </Tooltip> 

                  <Tooltip placement="bottom" className="text-colormind-text bg-colormind-primary" showArrow={true} content="Whatsapp">
                    <Button size="lg" isIconOnly href='tel:+50361141786' target="_blank" as={Link} className="bg-colormind-button text-colormind-text rounded-full text-xl hover:scale-110" aria-label="Whatsapp">
                      <FaWhatsapp />
                    </Button>
                  </Tooltip>
                </div>
            </div>
        </div>
    </section>
  )
}
