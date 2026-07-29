import {Button, Card, CardBody, CardFooter, Image, Tooltip, Chip, Link} from "@nextui-org/react";
import proyecto1 from "../assets/proyects/proyecto1.gif"
import proyecto2 from "../assets/proyects/proyecto2.gif"
import proyecto3 from "../assets/proyects/proyecto3.gif"
import { BiLogoGithub  } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { MdWebAsset } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostman, SiSwagger, SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

export default function Proyects() {

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="proyects">
        <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">Proyectos</h1>

        <div className="md:grid gap-12 grid-cols-12">
            {/* Proyecto 1: SISTEMA DE LA DISAM */}
            <Card className="col-span-12 md:col-span-6 lg:col-span-6 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
                <CardBody>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            alt="Imagen del proyecto 1 - Sistema interno de DISAM"
                            className="object-cover rounded-xl "
                            src={proyecto1}
                        />
                    </div>
                    <h3 className="font-semibold text-xl mb-6 text-justify my-2">Sistema de Gestión Institucional</h3>
                    <p className="text-justify">
                        Desarrollé un sistema web interno para la Dirección de Salud Ambiental, diseñado para digitalizar y optimizar la gestión de los procesos administrativos de la institución. La aplicación fue desarrollada con Laravel y Blade, e integra módulos para la administración de usuarios, empleados, roles y permisos, control de permisos laborales, gestión de vehículos institucionales, asignación y préstamo de equipos, registro de salidas de activos, administración de salas de reuniones, planificación de actividades y eventos, y control documental, entre otras funcionalidades.
                        <br/><br/>
                        El sistema permitió centralizar la información, mejorar el control de los recursos institucionales y agilizar los procesos administrativos, proporcionando una solución segura, organizada y fácil de utilizar para el personal de la institución.
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-6">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Laravel 9">
                            <Chip className="m-1 text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="JavaScript">
                            <Chip className="m-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="PHP 8.0">
                            <Chip className="m-1 text-lg"><MdOutlinePhp/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Bootstrap">
                            <Chip className="m-1 text-lg"><BsBootstrap/> </Chip>
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

            {/* Proyecto 2: Clon de pagina de toyota */}
            <Card className="col-span-12 md:col-span-6 lg:col-span-6 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
                <CardBody>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            alt="Imagen del proyecto 2 - Clon de Sitio Web de Toyota"
                            className="object-cover rounded-xl "
                            src={proyecto2}
                        />
                    </div>
                    <h3 className="font-semibold text-xl mb-6 text-justify my-2">Clon de Sitio Web de Toyota</h3>
                    <p className="text-justify">
                        Este proyecto fue desarrollado con fines educativos para fortalecer mis habilidades en el desarrollo de interfaces modernas utilizando Next.js, React y Tailwind CSS. Consiste en la recreación del frontend del sitio web de Toyota, prestando especial atención al diseño, la estructura de los componentes y la experiencia de usuario.
                        <br/><br/>
                        Durante el desarrollo, trabajé en la implementación de una interfaz completamente responsiva, realizando ajustes y correcciones para garantizar una correcta visualización en diferentes tamaños de pantalla. Además, optimicé diversos aspectos del diseño y la maquetación para lograr un resultado más fiel al sitio original.
                        <br/><br/>
                        Este proyecto se enfoca exclusivamente en el desarrollo del frontend y fue realizado únicamente con fines de aprendizaje y práctica. El sitio original pertenece a Toyota y puede consultarse en: 
                        <br/><br/>
                        <a className="underline" href="https://www.toyota.com/" rel="noreferrer" target="_blank"> https://www.toyota.com/</a> 
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-6">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="React">
                            <Chip className="m-1 text-lg"><FaReact/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="JavaScript">
                            <Chip className="m-1 text-lg"><IoLogoJavascript/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Next JS 14">
                            <Chip className="m-1 text-lg"><TbBrandNextjs/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="TailwindCSS">
                            <Chip className="m-1 text-lg"><SiTailwindcss/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-6 text-right">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Web">
                            <Button href='https://clon-toyota.netlify.app/' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl mr-2" aria-label="GitHub">
                                <MdWebAsset  />
                            </Button>
                        </Tooltip>

                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Repositorio">
                            <Button href='https://github.com/Emanuel503/clon-toyota' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl" aria-label="GitHub">
                                <BiLogoGithub />
                            </Button>
                        </Tooltip>
                    </div>
                </CardFooter>
            </Card>

            {/* Proyecto 3: api rest de tareas*/}
            <Card className="col-span-12 md:col-span-6 lg:col-span-6 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
                <CardBody>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            alt="Imagen del proyecto 3 - API REST para Gestión de Tareas"
                            className="object-cover rounded-xl "
                            src={proyecto3}
                        />
                    </div>
                    <h3 className="font-semibold text-xl mb-6 text-justify my-2">API REST para Gestión de Tareas</h3>
                    <p className="text-justify">
                    Desarrollé una API REST con Laravel para la administración de tareas, usuarios, roles y categorías. La aplicación permite crear, asignar y gestionar tareas, así como administrar permisos y la organización de la información mediante categorías. La API fue documentada utilizando Postman y Swagger (OpenAPI), incluyendo todos los endpoints, ejemplos de solicitudes y respuestas, autenticación, códigos de estado HTTP y una interfaz interactiva para realizar pruebas. Este proyecto refleja buenas prácticas en el diseño, desarrollo y documentación de servicios RESTful.
                    </p>
                </CardBody>
                <CardFooter className="text-small grid grid-cols-12">
                   <div className="col-span-6">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Laravel 11">
                            <Chip className=" text-lg"><FaLaravel/> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Swagger">
                            <Chip className="m-1 text-lg"><SiSwagger /> </Chip>
                        </Tooltip>
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Postman">
                            <Chip className="m-1 text-lg"><SiPostman/> </Chip>
                        </Tooltip>
                   </div>

                   <div className="col-span-6 text-right">
                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Web">
                            <Button href='https://mega.nz/file/tRFWVa7b#9JLkd0ms2vqNsZOKpZ_5dH5CUJzbiHOChK9YNfcATD0' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl mr-2" aria-label="GitHub">
                                <MdWebAsset  />
                            </Button>
                        </Tooltip>

                        <Tooltip className="text-colormind-text bg-colormind-primary" showArrow={true} content="Repositorio">
                            <Button href='https://github.com/Emanuel503/to-do-list-api' target="_blank" as={Link} isIconOnly className="bg-colormind-button text-colormind-text text-2xl" aria-label="GitHub">
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
