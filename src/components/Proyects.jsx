import proyecto1 from "../assets/proyects/proyecto1.gif";
import proyecto2 from "../assets/proyects/proyecto2.gif";
import proyecto3 from "../assets/proyects/proyecto3.gif";
import proyecto4 from "../assets/proyects/proyecto4.gif";
import { useLanguage } from "../context/LanguageContext";
import CardProject from "./CardProject";

export default function Proyects() {
  // TODO: agregar como minimo 3 proyectos mas

  const { text } = useLanguage();

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="proyects">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        {text.navbar.projects}
      </h1>

      <div className="md:grid gap-12 grid-cols-12">
        {/* Proyecto 1: SISTEMA DE LA DISAM */}
        <CardProject
          titulo={text.projects.project1.title}
          imagen={proyecto1}
          urlRepositorio="https://github.com/Emanuel503/sistema_disam.git"
          descripcion={
            <>
              <p>{text.projects.project1.text1}</p>
              <br />
              <p>{text.projects.project1.text2}</p>
              <br />
              <p>{text.projects.project1.text3}</p>
            </>
          }
          tecnologias={["Laravel", "JavaScript", "PHP", "Bootstrap", "MySQL"]}
        />

        {/* Proyecto 2: Clon de pagina de toyota */}
        <CardProject
          titulo={text.projects.project2.title}
          imagen={proyecto2}
          urlRepositorio="https://github.com/Emanuel503/clon-toyota"
          descripcion={
            <>
              <p className="text-justify">{text.projects.project2.text1}</p>
              <br />
              <p className="text-justify">{text.projects.project2.text2}</p>
              <br />
              <p className="text-justify">{text.projects.project2.text3}</p>
              <br />

              <a
                className="underline"
                href="https://www.toyota.com/"
                rel="noreferrer"
                target="_blank"
              >
                https://www.toyota.com/
              </a>
            </>
          }
          tecnologias={["React", "JavaScript", "NextJs", "TailwindCSS"]}
          urlWeb="https://clon-toyota.netlify.app/"
        />

        {/* Proyecto 3: api rest de tareas*/}
        <CardProject
          titulo={text.projects.project3.title}
          imagen={proyecto3}
          urlRepositorio="https://github.com/Emanuel503/to-do-list-api"
          descripcion={
            <>
              <p className="text-justify">{text.projects.project3.text1}</p>
              <br />
              <p className="text-justify">{text.projects.project3.text2}</p>
              <br />
            </>
          }
          tecnologias={["Laravel", "Swagger", "Postman", "MySQL"]}
          urlWeb="https://mega.nz/file/tRFWVa7b#9JLkd0ms2vqNsZOKpZ_5dH5CUJzbiHOChK9YNfcATD0"
        />

        {/* Proyecto 4: sistema de ticket  */}
        <CardProject
          titulo={text.projects.project4.title}
          imagen={proyecto4}
          urlRepositorio="https://github.com/Emanuel503/sistema-ticket"
          descripcion={
            <>
              <p className="text-justify">{text.projects.project4.text1}</p>
              <br />
              <p className="text-justify">{text.projects.project4.text2}</p>
              <br />
              <p className="text-justify">{text.projects.project4.text2}</p>
              <br />
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
