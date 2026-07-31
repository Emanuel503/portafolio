import {
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { LiaSymfony } from "react-icons/lia";
import {
  SiCouchbase,
  SiExpress,
  SiInertia,
  SiMicrosoftsqlserver,
  SiPostman,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import TechnologyCard from "./TechnologyCard";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { DiMysql, DiPostgresql } from "react-icons/di";

export default function TechnologiesSection() {
  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="technologies">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        Tecnologías
      </h1>

      <div className="grid gap-10 grid-cols-12">
        <div className="col-span-12 xl:col-span-6">
          <h3 className="text-colormind-text text-2xl font-bold text-center mb-10">
            Backend
          </h3>
          <div className="flex gap-8 justify-center flex-wrap">
            <TechnologyCard
              nombre="Laravel"
              icono={FaLaravel}
              color="text-orange-500"
            />

            <TechnologyCard nombre="Symfony" icono={LiaSymfony} />

            <TechnologyCard
              nombre="PHP"
              icono={FaPhp}
              color="text-indigo-500"
            />

            <TechnologyCard
              nombre="Node.js"
              icono={FaNodeJs}
              color="text-green-500"
            />

            <TechnologyCard nombre="Express" icono={SiExpress} />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <h3 className="text-colormind-text text-2xl font-bold text-center mb-10">
            Frontend
          </h3>
          <div className="flex gap-8 justify-center flex-wrap">
            <TechnologyCard
              nombre="React"
              icono={FaReact}
              color="text-blue-500"
            />

            <TechnologyCard
              nombre="Vue"
              icono={FaVuejs}
              color="text-green-500"
            />

            <TechnologyCard
              nombre="TailwindCSS"
              icono={SiTailwindcss}
              color="text-blue-400"
            />

            <TechnologyCard
              nombre="Bootstrap"
              icono={BsBootstrap}
              color="text-purple-500"
            />

            <TechnologyCard nombre="NextJs" icono={TbBrandNextjs} />

            <TechnologyCard
              nombre="JavaScript"
              icono={IoLogoJavascript}
              color="text-yellow-500"
            />

            <TechnologyCard
              nombre="TypeScript"
              icono={SiTypescript}
              color="text-blue-500"
            />

            <TechnologyCard
              nombre="InertiaJs"
              icono={SiInertia}
              color="text-blue-500"
            />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <h3 className="text-colormind-text text-2xl font-bold text-center mb-10">
            Base de datos
          </h3>
          <div className="flex gap-8 justify-center flex-wrap">
            <TechnologyCard
              nombre="PostgresSQL"
              icono={DiPostgresql}
              color="text-blue-500"
            />

            <TechnologyCard
              nombre="MySQL"
              icono={DiMysql}
              color="text-orange-500"
            />

            <TechnologyCard
              nombre="SQLite"
              icono={SiSqlite}
              color="text-blue-500"
            />

            <TechnologyCard
              nombre="SQLServer"
              icono={SiMicrosoftsqlserver}
              color="text-blue-500"
            />

            <TechnologyCard
              nombre="CouchBase"
              icono={SiCouchbase}
              color="text-red-500"
            />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <h3 className="text-colormind-text text-2xl font-bold text-center mb-10">
            Herramientas
          </h3>
          <div className="flex gap-8 justify-center flex-wrap">
            <TechnologyCard
              nombre="Docker"
              icono={FaDocker}
              color="text-blue-500"
            />

            <TechnologyCard nombre="GitHub" icono={FaGithub} />

            <TechnologyCard
              nombre="Postman"
              icono={SiPostman}
              color="text-orange-500"
            />

            <TechnologyCard
              nombre="Git"
              icono={FaGitAlt}
              color="text-orange-500"
            />

            <TechnologyCard nombre="Dbeaver" icono={FaDatabase} />
          </div>
        </div>
      </div>
    </section>
  );
}
