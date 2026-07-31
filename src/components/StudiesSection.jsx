import { FaUniversity } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import CardStudy from "./CardStudy";

export default function StudiesSection() {
  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="studies-skills">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        Estudios
      </h1>

      <div className="grid grid-cols-12 gap-x-6">
        <CardStudy
          nombre="Curso de Ingles Intermedio."
          lugar="English4Callcenters"
          fecha="Ene 2025 - Dic 2025"
          icono={GiDiploma}
        />

        <CardStudy
          nombre="Técnico en ingeniería en computación."
          lugar="Universidad Don Bosco"
          fecha="Ene 2021 - Jun 2023"
          icono={FaUniversity}
        />

        <CardStudy
          nombre="Curso de MERN"
          lugar="Udemy"
          fecha="Ene 2020 - Nov 2020"
          icono={GiDiploma}
        />

        <CardStudy
          nombre="Técnico en desarrollo de software."
          lugar="Colegio El Espíritu Santo"
          fecha="Ene 2018 - Nov 2020"
          icono={FaSchoolFlag}
        />

        <CardStudy
          nombre="Curso en CCNA Routing and Switching"
          lugar="Cisco Systems"
          fecha="Ene 2020 - Nov 2020"
          icono={GiDiploma}
        />

        <CardStudy
          nombre="Curso de It Essentials"
          lugar="Cisco Systems"
          fecha="Ene 2019- Nov 2019"
          icono={GiDiploma}
        />
      </div>
    </section>
  );
}
