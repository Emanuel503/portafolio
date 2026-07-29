import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tooltip,
  Chip,
  Link,
} from "@nextui-org/react";
import { BiLogoGithub, BiLogoPostgresql } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { FaDocker, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlinePhp, MdWebAsset } from "react-icons/md";
import {
  SiInertia,
  SiMysql,
  SiPostman,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs, TbPlugConnectedX } from "react-icons/tb";
import PropTypes from "prop-types";
import { DiPostgresql } from "react-icons/di";

export default function CardProject({
  titulo,
  imagen,
  descripcion,
  urlRepositorio,
  urlWeb,
  tecnologias,
}) {
  CardProject.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    descripcion: PropTypes.node.isRequired,
    urlRepositorio: PropTypes.string,
    urlWeb: PropTypes.string,
    tecnologias: PropTypes.node,
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const icons = {
    Laravel: <FaLaravel />,
    React: <FaReact />,
    TypeScript: <SiTypescript />,
    PHP: <MdOutlinePhp />,
    JavaScript: <IoLogoJavascript />,
    Bootstrap: <BsBootstrap />,
    MySQL: <SiMysql />,
    PostgreSQL: <BiLogoPostgresql />,
    Docker: <FaDocker />,
    WebSocket: <TbPlugConnectedX />,
    NextJs: <TbBrandNextjs />,
    TailwindCSS: <SiTailwindcss />,
    Swagger: <SiSwagger />,
    Postman: <SiPostman />,
    IntertiaJs: <SiInertia />,
    PostgresSQL: <DiPostgresql />,
  };

  return (
    <>
      <Card className="col-span-12 md:col-span-6 lg:col-span-6 bg-colormind-cards mb-5 md:mb-0 hover:scale-105">
        <CardBody>
          <div className="w-full flex items-center justify-center">
            <Image
              alt={`Imagen del proyecto: ${titulo}`}
              className="object-cover rounded-xl cursor-zoom-in"
              src={imagen}
              onClick={onOpen}
            />
          </div>
          <h3 className="font-semibold text-xl mb-6 text-justify my-2">
            {titulo}
          </h3>
          <div className="text-justify">{descripcion}</div>
        </CardBody>
        <CardFooter className="text-small grid grid-cols-12">
          <div className="col-span-6">
            {tecnologias.map((tec) => (
              <Tooltip
                key={tec}
                className="text-colormind-text bg-colormind-primary"
                showArrow={true}
                content={tec}
              >
                <Chip className="m-1 text-lg">{icons[tec]} </Chip>
              </Tooltip>
            ))}
          </div>
          <div className="col-span-6 text-right">
            {urlWeb && (
              <Tooltip
                className="text-colormind-text bg-colormind-primary"
                showArrow={true}
                content="Web"
              >
                <Button
                  href={urlWeb}
                  target="_blank"
                  as={Link}
                  isIconOnly
                  className="bg-colormind-button text-colormind-text text-2xl mr-2"
                  aria-label="Web"
                >
                  <MdWebAsset />
                </Button>
              </Tooltip>
            )}

            <Tooltip
              className="text-colormind-text bg-colormind-primary"
              showArrow={true}
              content="Repositorio"
            >
              <Button
                href={urlRepositorio}
                target="_blank"
                as={Link}
                isIconOnly
                className="bg-colormind-button text-colormind-text text-2xl"
                aria-label="GitHub"
              >
                <BiLogoGithub />
              </Button>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
        scrollBehavior="inside"
        classNames={{
          base: "bg-colormind-cards",
          header: "border-b border-divider",
          footer: "border-t border-divider",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                <h3 className="text-xl font-semibold dark:text-white text-black">
                  {titulo}
                </h3>
              </ModalHeader>

              <ModalBody className="flex justify-center p-4">
                <Image
                  src={imagen}
                  alt={`Imagen del proyecto: ${titulo}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                />
              </ModalBody>

              <ModalFooter>
                <Button color="default" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
