import {Button, Card, CardBody, CardFooter, Image, Tooltip, Chip, Link} from "@nextui-org/react";
import proyecto1 from "../assets/proyects/proyecto1.gif"
import { BiLogoGithub  } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { MdWebAsset } from "react-icons/md";


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
                    <h3 className="font-semibold text-xl mb-6 text-justify">Sistema interno de la DISAM</h3>
                    <p className="text-justify">
                        Este proyecto lo realicé en mis prácticas profesionales para la Dirección de Salud Ambiental, una institución de gobierno en el cual se necesitaba poder llevar el registro y el control de usuarios, permisos laborales, reservaciones de salas de reuniones, eventos de la institución, registro y control de vehículos, registro y control de documentación, entre muchos más funciones.
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-6">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Laravel 9">
                            <Chip className="mr-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="JavaScript">
                            <Chip className="mr-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="PHP 8.0">
                            <Chip className="mr-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-6 text-right">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Repositorio">
                            <Button href='https://github.com/Emanuel503/sistema_disam.git' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl" aria-label="GitHub">
                                <BiLogoGithub />
                            </Button>
                        </Tooltip>
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
                    Este proyecto lo realicé en mis prácticas profesionales para la Dirección de salud Ambiental, una institución de gobierno en el cual se necesitaba poder llevar el registro y el control de usuarios, permisos laborales, reservaciones de salas de reuniones, eventos de la institución, registro y control de vehículos, registro y control de documentación, entre muchos más funciones.
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-6">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Laravel 9">
                            <Chip className="mr-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="JavaScript">
                            <Chip className="mr-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="PHP 8.0">
                            <Chip className="mr-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-6 text-right">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Web">
                            <Button href='https://github.com/Emanuel503/sistema_disam.git' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl mr-2" aria-label="GitHub">
                                <MdWebAsset  />
                            </Button>
                        </Tooltip>

                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Repositorio">
                            <Button href='https://github.com/Emanuel503/sistema_disam.git' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl" aria-label="GitHub">
                                <BiLogoGithub />
                            </Button>
                        </Tooltip>
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
                    Este proyecto lo realicé en mis prácticas profesionales para la Dirección de salud Ambiental, una institución de gobierno en el cual se necesitaba poder llevar el registro y el control de usuarios, permisos laborales, reservaciones de salas de reuniones, eventos de la institución, registro y control de vehículos, registro y control de documentación, entre muchos más funciones.
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-6">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Laravel 9">
                            <Chip className="mr-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="JavaScript">
                            <Chip className="mr-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="PHP 8.0">
                            <Chip className="mr-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-6 text-right">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Web">
                            <Button href='https://github.com/Emanuel503/sistema_disam.git' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl mr-2" aria-label="GitHub">
                                <MdWebAsset  />
                            </Button>
                        </Tooltip>

                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Repositorio">
                            <Button href='https://github.com/Emanuel503/sistema_disam.git' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl" aria-label="GitHub">
                                <BiLogoGithub />
                            </Button>
                        </Tooltip>
                    </div>
                </CardFooter>
            </Card>
        </div>
    </section>
  )
}
