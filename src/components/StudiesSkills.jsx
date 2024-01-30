import { Progress } from "@nextui-org/react";
import { FaUniversity } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";

export default function StudiesSkills() {
  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64 h-screen" id="studies-skills">
        <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">Estudios y Habilidades</h1>

        <div className="grid grid-cols-12">

          <div className="col-span-12 md:col-span-6">
            <ul className="list-none list-outside text-colormind-text">
              <li className="bg-colormind-cards px-3 py-4 rounded-2xl mb-5">
                  <div className="flex items-center ml-3">
                      <FaUniversity className="inline mr-4 text-2xl"/> 
                      <h3 className="inline text-2xl">Técnico en ingeniería en computación.</h3>
                  </div>
                  <p className="indent-16 underline text-base">Universidad Don Bosco</p>
              </li>

              <li className="bg-colormind-cards px-3 py-4 rounded-2xl mb-5">
                  <div className="flex items-center ml-3">
                      <FaSchoolFlag className="inline mr-4 text-2xl"/> 
                      <h3 className="inline text-2xl">Técnico en desarrollo de software.</h3>
                  </div>
                  <p className="indent-16 underline text-base">Colegio El Espíritu Santo</p>
              </li>
              
              <li className="bg-colormind-cards px-3 py-4 rounded-2xl mb-5">
                  <div className="flex items-center ml-3">
                      <GiDiploma className="inline mr-4 text-2xl"/> 
                      <h3 className="inline text-2xl">Curos de MERN</h3>
                  </div>
                  <p className="indent-16 underline text-base">Udemy</p>
              </li>

              <li className="bg-colormind-cards px-3 py-4 rounded-2xl mb-5">
                  <div className="flex items-center ml-3">
                      <GiDiploma className="inline mr-4 text-2xl"/> 
                      <h3 className="inline text-2xl">Curso en CCNA Routing and Switching</h3>
                  </div>
                  <p className="indent-16 underline text-base">Cisco Systems</p>
              </li>

              <li className="bg-colormind-cards px-3 py-4 rounded-2xl mb-5">
                  <div className="flex items-center ml-3">
                      <GiDiploma className="inline mr-4 text-2xl"/> 
                      <h3 className="inline text-2xl">Curso de It Essentials</h3>
                  </div>
                  <p className="indent-16 underline text-base">Cisco Systems</p>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center">
              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="HTML"
                value={90}
                className="mb-4"
              />

              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="CSS"
                value={50}
                className="mb-4"
              />

              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="JavaScript"
                value={60}
                className="mb-4"
              />

              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="PHP"
                value={70}
                className="mb-4"
              />

              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="Laravel"
                value={80}
                className="mb-4"
              />

            <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="NodeJS"
                value={40}
                className="mb-4"
              />

              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="React"
                value={40}
                className="mb-4"
              />

              <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="MySQL"
                value={70}
                className="mb-4"
              />

            <Progress
                size="md"
                radius="sm"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="PostgreSQL"
                value={70}
                className="mb-4"
              />
          </div>
        </div>
    </section>
  )
}
