import {Button, Card, CardBody, CardFooter, Image, Tooltip, Chip} from "@nextui-org/react";
import proyecto1 from "../assets/proyects/proyecto1.jpg"
import { BiLogoGithub  } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";

export default function Proyects() {

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="proyects">
        <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">Proyectos</h1>

        <div className="md:grid gap-12 grid-cols-12">
            <Card className="col-span-12 md:col-span-6 lg:col-span-4 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
                <CardBody>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            alt="Imagen del proyecto 1 - Sistema interno de DISAM"
                            className="object-cover rounded-xl "
                            src={proyecto1}
                        />
                    </div>
                    <h3 className="font-semibold text-xl mb-6 text-justify">Sistema interno DISAM</h3>
                    <p className="text-justify">
                        Este proyecto lo realice en mis proecticas profecionales para la Direccion de salud ambiental, 
                        una insiticion de gobierno en el cual se necesitaba el poder llevar el registro y el control de usuarios, permisos laborales, reservacioes de salas de reuniones, eventos de la insticion, registro y control de vehiculos, entre muchos mas funciones. 
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-10">
                        <Tooltip showArrow={true} content="Laravel 9">
                            <Chip className="mr-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip showArrow={true} content="JavaScript">
                            <Chip className="mr-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip showArrow={true} content="PHP 8.0">
                            <Chip className="mr-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-2 ">
                        <Button isIconOnly className="bg-colormind-button text-colormind-text text-2xl float-right" aria-label="GitHub">
                            <BiLogoGithub />
                        </Button>
                    </div>
                </CardFooter>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-4 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
                <CardBody>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            alt="Imagen del proyecto 1 - Sistema interno de DISAM"
                            className="object-cover rounded-xl "
                            src={proyecto1}
                        />
                    </div>
                    <h3 className="font-semibold text-xl mb-6 text-justify">Sistema interno DISAM</h3>
                    <p className="text-justify">
                        Este proyecto lo realice en mis proecticas profecionales para la Direccion de salud ambiental, 
                        una insiticion de gobierno en el cual se necesitaba el poder llevar el registro y el control de usuarios, permisos laborales, reservacioes de salas de reuniones, eventos de la insticion, registro y control de vehiculos, entre muchos mas funciones. 
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-10">
                        <Tooltip showArrow={true} content="Laravel 9">
                            <Chip className="mr-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip showArrow={true} content="JavaScript">
                            <Chip className="mr-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip showArrow={true} content="PHP 8.0">
                            <Chip className="mr-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-2 ">
                        <Button isIconOnly className="bg-colormind-button text-colormind-text text-2xl float-right" aria-label="GitHub">
                            <BiLogoGithub />
                        </Button>
                    </div>
                </CardFooter>
            </Card>

            <Card className="col-span-12 md:col-span-6 lg:col-span-4 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
                <CardBody>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            alt="Imagen del proyecto 1 - Sistema interno de DISAM"
                            className="object-cover rounded-xl "
                            src={proyecto1}
                        />
                    </div>
                    <h3 className="font-semibold text-xl mb-6 text-justify">Sistema interno DISAM</h3>
                    <p className="text-justify">
                        Este proyecto lo realice en mis proecticas profecionales para la Direccion de salud ambiental, 
                        una insiticion de gobierno en el cual se necesitaba el poder llevar el registro y el control de usuarios, permisos laborales, reservacioes de salas de reuniones, eventos de la insticion, registro y control de vehiculos, entre muchos mas funciones. 
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-10">
                        <Tooltip showArrow={true} content="Laravel 9">
                            <Chip className="mr-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip showArrow={true} content="JavaScript">
                            <Chip className="mr-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip showArrow={true} content="PHP 8.0">
                            <Chip className="mr-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-2 ">
                        <Button isIconOnly className="bg-colormind-button text-colormind-text text-2xl float-right" aria-label="GitHub">
                            <BiLogoGithub />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    </section>
  )
}
