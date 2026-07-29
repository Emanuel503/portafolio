import proyecto1 from "../assets/proyects/proyecto1.gif";
import proyecto2 from "../assets/proyects/proyecto2.gif";
import proyecto3 from "../assets/proyects/proyecto3.gif";
import proyecto4 from "../assets/proyects/proyecto4.gif";
import CardProject from "./CardProject";

export default function Proyects() {
  // TODO: agregar como minimo 3 proyectos mas

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="proyects">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        Proyectos
      </h1>

      <div className="md:grid gap-12 grid-cols-12">
        {/* Proyecto 1: SISTEMA DE LA DISAM */}
        <CardProject
          titulo="Sistema de Gestión Institucional"
          imagen={proyecto1}
          urlRepositorio="https://github.com/Emanuel503/sistema_disam.git"
          descripcion={
            <>
              <p>
                Desarrollé un sistema web interno para la Dirección de Salud
                Ambiental, diseñado para digitalizar y optimizar la gestión de
                los procesos administrativos de la institución.
              </p>
              <br />
              <p>
                La aplicación fue desarrollada con Laravel y Blade, e integra
                módulos para la administración de usuarios, empleados, roles y
                permisos, control de permisos laborales, gestión de vehículos
                institucionales, asignación y préstamo de equipos, registro de
                salidas de activos, administración de salas de reuniones,
                planificación de actividades y eventos, y control documental,
                entre otras funcionalidades.
              </p>
              <br />
              <p>
                El sistema permitió centralizar la información, mejorar el
                control de los recursos institucionales y agilizar los procesos
                administrativos, proporcionando una solución segura, organizada
                y fácil de utilizar para el personal de la institución.
              </p>
            </>
          }
          tecnologias={["Laravel", "JavaScript", "PHP", "Bootstrap", "MySQL"]}
        />

        {/* Proyecto 2: Clon de pagina de toyota */}
        <CardProject
          titulo="Clon de Sitio Web de Toyota"
          imagen={proyecto2}
          urlRepositorio="https://github.com/Emanuel503/clon-toyota"
          descripcion={
            <>
              <p className="text-justify">
                Este proyecto fue desarrollado con fines educativos para
                fortalecer mis habilidades en el desarrollo de interfaces
                modernas utilizando Next.js, React y Tailwind CSS. Consiste en
                la recreación del frontend del sitio web de Toyota, prestando
                especial atención al diseño, la estructura de los componentes y
                la experiencia de usuario.
              </p>
              <br />

              <p className="text-justify">
                Durante el desarrollo, trabajé en la implementación de una
                interfaz completamente responsiva, realizando ajustes y
                correcciones para garantizar una correcta visualización en
                diferentes tamaños de pantalla. Además, optimicé diversos
                aspectos del diseño y la maquetación para lograr un resultado
                más fiel al sitio original.
              </p>
              <br />

              <p className="text-justify">
                Este proyecto se enfoca exclusivamente en el desarrollo del
                frontend y fue realizado únicamente con fines de aprendizaje y
                práctica. El sitio original pertenece a Toyota y puede
                consultarse en:
              </p>
              <br />

              <a
                className="underline"
                href="https://www.toyota.com/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                https://www.toyota.com/
              </a>
            </>
          }
          tecnologias={["React", "JavaScript", "NextJs", "TailwindCSS"]}
          urlWeb="https://clon-toyota.netlify.app/"
        />

        {/* Proyecto 3: api rest de tareas*/}
        <CardProject
          titulo="API REST para Gestión de Tareas"
          imagen={proyecto3}
          urlRepositorio="https://github.com/Emanuel503/to-do-list-api"
          descripcion={
            <>
              <p className="text-justify">
                Desarrollé una API REST con Laravel para la administración de
                tareas, usuarios, roles y categorías. La aplicación permite
                crear, asignar y gestionar tareas, así como administrar permisos
                y la organización de la información mediante categorías.
              </p>
              <br />

              <p className="text-justify">
                La API fue documentada utilizando Postman y Swagger (OpenAPI),
                incluyendo todos los endpoints, ejemplos de solicitudes y
                respuestas, autenticación, códigos de estado HTTP y una interfaz
                interactiva para realizar pruebas. Este proyecto refleja buenas
                prácticas en el diseño, desarrollo y documentación de servicios
                RESTful.
              </p>
            </>
          }
          tecnologias={["Laravel", "Swagger", "Postman", "MySQL"]}
          urlWeb="https://mega.nz/file/tRFWVa7b#9JLkd0ms2vqNsZOKpZ_5dH5CUJzbiHOChK9YNfcATD0"
        />

        {/* Proyecto 4: sistema de ticket  */}
        <CardProject
          titulo="Sistema de Gestión de Tickets"
          imagen={proyecto4}
          urlRepositorio="https://github.com/Emanuel503/sistema-ticket"
          descripcion={
            <>
              <p className="text-justify">
                Desarrollé una API REST con Laravel para la administración de
                tareas, usuarios, roles y categorías. La aplicación permite
                crear, asignar y gestionar tareas, así como administrar permisos
                y la organización de la información mediante categorías.
              </p>
              <br />

              <p className="text-justify">
                La API fue documentada utilizando Postman y Swagger (OpenAPI),
                incluyendo todos los endpoints, ejemplos de solicitudes y
                respuestas, autenticación, códigos de estado HTTP y una interfaz
                interactiva para realizar pruebas. Este proyecto refleja buenas
                prácticas en el diseño, desarrollo y documentación de servicios
                RESTful.
              </p>
            </>
          }
          tecnologias={[
            "Laravel",
            "IntertiaJs",
            "React",
            "TypeScript",
            "PostgresSQL",
          ]}
        />
      </div>
    </section>
  );
}
