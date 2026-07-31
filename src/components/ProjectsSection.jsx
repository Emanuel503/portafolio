import { useLanguage } from "../context/LanguageContext";
import CardProject from "./CardProject";
import { projectResources } from "../content/projects";

export default function Projects() {
  const { text } = useLanguage();

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="proyects">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        {text.navbar.projects}
      </h1>

      <div className="md:grid gap-12 grid-cols-12">
        {text.projects.map((project) => (
          <CardProject
            key={project.id}
            titulo={project.title}
            imagen={projectResources[project.id].image}
            urlRepositorio={project.urlGit}
            urlWeb={project.urlWeb}
            descripcion={project.description}
            tecnologias={project.technologies}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
}
