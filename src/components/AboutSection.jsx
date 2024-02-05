import imagen from '../assets/foto.jpg';
import { Link, Image, Button } from "@nextui-org/react";
import { BiCodeAlt, BiCode, BiSolidCommentDetail  } from "react-icons/bi";

export default function AboutSection() {
  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64 " id="about">
        <Image
            isBlurred
            shadow="sm"
            radius="lg"
            width="100%"
            alt="Foto de Emanuel Molina"
            className="w-full object-cover h-[350px] mb-10 hover:scale-105"
            src={imagen}
        />

        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
                <h2 className="text-colormind-text text-5xl font-extrabold mb-2">Emanuel José Molina Zúniga</h2>
                <h3 className='text-colormind-text text-3xl mb-6'><BiCode className='inline' /> Programador Web <BiCodeAlt className='inline'/></h3>
                <p className='text-colormind-text text-md'>
                    Soy Emanuel un programador web. Me dedico a programar sitios y sistemas web. Con tecnologías como PHP, JavaScript, Laravel, NodeJs, NextUI, Bootstrap o React.
                </p>
                <Button className="mt-5 hover:scale-110" href='https://mega.nz/file/xc0wHaIR#2Y4kvYY6mzN26uhwsNT-zsdTk1IzyttdG1xGgIJyjd8' target='_blank' as={Link}>Descargar CV</Button>
            </div>
            <div className='col-span-12 mt-10 md:mt-0 md:col-span-6 flex items-center justify-center'>
                <Button size='lg' href='#contact' as={Link} className="bg-colormind-button text-colormind-text font-semibold hover:scale-110" aria-label="Contactame">
                    <BiSolidCommentDetail /> Contactar
                </Button> 
            </div>
        </div>
    </section>
  )
}
