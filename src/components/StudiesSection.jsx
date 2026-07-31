import CardStudy from "./CardStudy";
import { useLanguage } from "../context/LanguageContext";

export default function StudiesSection() {
  const { text } = useLanguage();

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="studies-skills">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        {text.navbar.studies}
      </h1>

      <div className="grid grid-cols-12 gap-x-6">
        {text.studies.map((study, index) => (
          <CardStudy
            key={index}
            nombre={study.title}
            lugar={study.place}
            fecha={study.daterange}
            icono={study.type}
          />
        ))}
      </div>
    </section>
  );
}
