import CardWork from "./CardWork";

export default function WorksSection() {
  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="works">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        Trabajos
      </h1>

      <CardWork
        nombre="Desarrollador de software: Full Stack"
        lugar="Ministerio de Salud"
        fecha="2023 - Actualmente"
        funciones={[
          "Desarrollo, mantenimiento y mejora de aplicaciones web utilizando Laravel, Symfony, Next.js, React y Vue.js.",
          "Diseño e implementación de nuevas funcionalidades, así como optimización y corrección de sistemas existentes.",
          "Administración y consulta de bases de datos relacionales y no relacionales, incluyendo elaboración y optimización de consultas SQL.",
        ]}
      />

      <CardWork
        nombre="Técnico Informático: Full Stack"
        lugar="Dirección de Salud Ambiental"
        fecha="2022 - 2022"
        funciones={[
          "Desarrollo y mantenimiento del sistema web de administración institucional utilizando Laravel.",
          "Soporte técnico a usuarios, incluyendo diagnóstico y resolución de problemas en equipos de escritorio, laptops, impresoras y otros dispositivos informáticos.",
          "Apoyo en la instalación y configuración de software, sistemas operativos y periféricos según las necesidades institucionales",
        ]}
      />
    </section>
  );
}
